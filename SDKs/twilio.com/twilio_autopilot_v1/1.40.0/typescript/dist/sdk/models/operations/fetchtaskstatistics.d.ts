import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTaskStatisticsServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchTaskStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTaskStatisticsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
     */
    assistantSid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) that is associated with the resource to fetch.
     */
    taskSid: string;
}
export declare class FetchTaskStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantTaskTaskStatistics?: shared.AutopilotV1AssistantTaskTaskStatistics;
}
