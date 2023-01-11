import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MakeUserProofreaderPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class MakeUserProofreaderSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class MakeUserProofreaderRequest extends SpeakeasyBase {
    pathParams: MakeUserProofreaderPathParams;
    security: MakeUserProofreaderSecurity;
}
export declare class MakeUserProofreaderResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
