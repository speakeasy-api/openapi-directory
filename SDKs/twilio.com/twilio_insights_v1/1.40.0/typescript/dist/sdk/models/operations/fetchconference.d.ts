import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConferenceServerList: readonly ["https://insights.twilio.com"];
export declare class FetchConferenceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConferenceRequest extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Conference.
     */
    conferenceSid: string;
}
export declare class FetchConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1Conference?: shared.InsightsV1Conference;
}
