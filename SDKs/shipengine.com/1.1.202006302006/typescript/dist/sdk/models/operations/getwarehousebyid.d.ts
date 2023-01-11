import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWarehouseByIdPathParams extends SpeakeasyBase {
    warehouseId: string;
}
export declare class GetWarehouseByIdRequest extends SpeakeasyBase {
    pathParams: GetWarehouseByIdPathParams;
}
export declare class GetWarehouseByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getWarehouseByIdResponseBody?: shared.GetWarehouseByIdResponseBody;
}
