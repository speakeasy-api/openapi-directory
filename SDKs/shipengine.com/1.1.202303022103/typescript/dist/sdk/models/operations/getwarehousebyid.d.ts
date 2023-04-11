import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWarehouseByIdRequest extends SpeakeasyBase {
    /**
     * Warehouse ID
     */
    warehouseId: string;
}
export declare class GetWarehouseByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getWarehouseByIdResponseBody?: shared.GetWarehouseByIdResponseBody;
}
