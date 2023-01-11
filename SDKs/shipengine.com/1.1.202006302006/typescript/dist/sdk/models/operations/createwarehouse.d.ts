import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWarehouseRequest extends SpeakeasyBase {
    request: shared.CreateWarehouseRequestBodyInput;
}
export declare class CreateWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createWarehouseResponseBody?: shared.CreateWarehouseResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
