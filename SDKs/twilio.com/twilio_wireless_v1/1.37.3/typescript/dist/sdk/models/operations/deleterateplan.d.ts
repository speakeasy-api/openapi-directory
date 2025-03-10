import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteRatePlanPathParams;
    security: DeleteRatePlanSecurity;
}
export declare class DeleteRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
