import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWarehousePathParams extends SpeakeasyBase {
    warehouseId: string;
}
export declare class UpdateWarehouseRequest extends SpeakeasyBase {
    pathParams: UpdateWarehousePathParams;
    request: shared.UpdateWarehouseRequestBodyInput;
}
export declare class UpdateWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
