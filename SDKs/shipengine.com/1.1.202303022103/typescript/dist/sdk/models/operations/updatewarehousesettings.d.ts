import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWarehouseSettingsRequest extends SpeakeasyBase {
    updateWarehouseSettingsRequestBody: shared.UpdateWarehouseSettingsRequestBody;
    /**
     * Warehouse ID
     */
    warehouseId: string;
}
export declare class UpdateWarehouseSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
