import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
    tagName: string;
}
export declare class TagShipmentRequest extends SpeakeasyBase {
    pathParams: TagShipmentPathParams;
}
export declare class TagShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    tagShipmentResponseBody?: shared.TagShipmentResponseBody;
}
