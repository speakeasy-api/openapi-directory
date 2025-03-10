import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONFERENCE_SERVERS: string[];
export declare class FetchConferencePathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchConferenceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConferenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConferencePathParams;
    security: FetchConferenceSecurity;
}
export declare class FetchConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConference?: shared.ApiV2010AccountConference;
}
