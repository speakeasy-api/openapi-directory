import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConferenceServerList: readonly ["https://api.twilio.com"];
export declare class FetchConferenceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConferenceRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Conference resource to fetch
     */
    sid: string;
}
export declare class FetchConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
