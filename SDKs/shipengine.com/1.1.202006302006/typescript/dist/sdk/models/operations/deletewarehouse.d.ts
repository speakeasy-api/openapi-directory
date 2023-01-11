import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWarehousePathParams extends SpeakeasyBase {
    warehouseId: string;
}
export declare class DeleteWarehouseRequest extends SpeakeasyBase {
    pathParams: DeleteWarehousePathParams;
}
export declare class DeleteWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
