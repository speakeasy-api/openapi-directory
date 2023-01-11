import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLabelFromShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class CreateLabelFromShipmentRequest extends SpeakeasyBase {
    pathParams: CreateLabelFromShipmentPathParams;
    request: shared.CreateLabelFromShipmentRequestBody;
}
export declare class CreateLabelFromShipmentResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createLabelFromShipmentResponseBody?: shared.CreateLabelFromShipmentResponseBodyOutput;
    errorResponseBody?: shared.ErrorResponseBody;
}
