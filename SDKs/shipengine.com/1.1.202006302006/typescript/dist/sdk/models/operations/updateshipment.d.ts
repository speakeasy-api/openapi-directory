import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class UpdateShipmentRequest extends SpeakeasyBase {
    pathParams: UpdateShipmentPathParams;
    request: shared.UpdateShipmentRequestBodyInput;
}
export declare class UpdateShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    updateShipmentResponseBody?: shared.UpdateShipmentResponseBody;
}
