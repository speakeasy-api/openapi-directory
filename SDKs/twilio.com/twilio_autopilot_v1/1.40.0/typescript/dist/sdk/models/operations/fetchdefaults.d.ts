import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDefaultsServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchDefaultsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDefaultsRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to fetch.
     */
    assistantSid: string;
}
export declare class FetchDefaultsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantDefaults?: shared.AutopilotV1AssistantDefaults;
}
