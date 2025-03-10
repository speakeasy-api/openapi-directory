import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncListPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteSyncListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteSyncListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteSyncListPathParams;
    security: DeleteSyncListSecurity;
}
export declare class DeleteSyncListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
