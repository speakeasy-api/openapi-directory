import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ParseShipmentRequest extends SpeakeasyBase {
    request: shared.ParseShipmentRequestBodyInput;
}
export declare class ParseShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    parseShipmentResponseBody?: shared.ParseShipmentResponseBody;
}
