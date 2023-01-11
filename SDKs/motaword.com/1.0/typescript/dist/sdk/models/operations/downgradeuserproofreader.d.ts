import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DowngradeUserProofreaderPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class DowngradeUserProofreaderSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class DowngradeUserProofreaderRequest extends SpeakeasyBase {
    pathParams: DowngradeUserProofreaderPathParams;
    security: DowngradeUserProofreaderSecurity;
}
export declare class DowngradeUserProofreaderResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
