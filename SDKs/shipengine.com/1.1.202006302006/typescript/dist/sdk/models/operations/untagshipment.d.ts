import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UntagShipmentPathParams extends SpeakeasyBase {
    shipmentId: string;
    tagName: string;
}
export declare class UntagShipmentRequest extends SpeakeasyBase {
    pathParams: UntagShipmentPathParams;
}
export declare class UntagShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
