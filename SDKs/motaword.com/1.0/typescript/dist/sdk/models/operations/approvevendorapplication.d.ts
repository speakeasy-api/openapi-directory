import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApproveVendorApplicationPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class ApproveVendorApplicationSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class ApproveVendorApplicationRequest extends SpeakeasyBase {
    pathParams: ApproveVendorApplicationPathParams;
    security: ApproveVendorApplicationSecurity;
}
export declare class ApproveVendorApplicationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
