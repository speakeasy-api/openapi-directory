import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchApprovalFetchServerList: readonly ["https://content.twilio.com"];
export declare class FetchApprovalFetchPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchApprovalFetchSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchApprovalFetchRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchApprovalFetchPathParams;
    security: FetchApprovalFetchSecurity;
}
export declare class FetchApprovalFetchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contentV1ContentApprovalFetch?: shared.ContentV1ContentApprovalFetch;
}
