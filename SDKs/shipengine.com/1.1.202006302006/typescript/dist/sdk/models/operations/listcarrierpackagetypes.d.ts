import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCarrierPackageTypesPathParams extends SpeakeasyBase {
    carrierId: string;
}
export declare class ListCarrierPackageTypesRequest extends SpeakeasyBase {
    pathParams: ListCarrierPackageTypesPathParams;
}
export declare class ListCarrierPackageTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listCarrierPackageTypesResponseBody?: shared.ListCarrierPackageTypesResponseBody;
}
