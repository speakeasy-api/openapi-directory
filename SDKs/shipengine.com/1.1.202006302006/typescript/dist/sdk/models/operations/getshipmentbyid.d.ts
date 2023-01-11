import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShipmentByIdPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class GetShipmentByIdRequest extends SpeakeasyBase {
    pathParams: GetShipmentByIdPathParams;
}
export declare class GetShipmentByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getShipmentByIdResponseBody?: shared.GetShipmentByIdResponseBody;
}
