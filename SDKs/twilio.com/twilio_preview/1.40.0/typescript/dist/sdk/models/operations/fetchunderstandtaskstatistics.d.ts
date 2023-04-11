import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandTaskStatisticsServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandTaskStatisticsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandTaskStatisticsRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
}
export declare class FetchUnderstandTaskStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantTaskTaskStatistics?: shared.PreviewUnderstandAssistantTaskTaskStatistics;
}
