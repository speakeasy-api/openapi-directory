import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RejectVendorApplicationPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RejectVendorApplicationSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class RejectVendorApplicationRequest extends SpeakeasyBase {
    pathParams: RejectVendorApplicationPathParams;
    security: RejectVendorApplicationSecurity;
}
export declare class RejectVendorApplicationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
