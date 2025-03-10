import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEndUserServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchEndUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEndUserRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchEndUserPathParams;
    security: FetchEndUserSecurity;
}
export declare class FetchEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1EndUser?: shared.TrusthubV1EndUser;
}
