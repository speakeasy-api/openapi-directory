import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShipmentByExternalIdPathParams extends SpeakeasyBase {
    externalShipmentId: string;
}
export declare class GetShipmentByExternalIdRequest extends SpeakeasyBase {
    pathParams: GetShipmentByExternalIdPathParams;
}
export declare class GetShipmentByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getShipmentByExternalIdResponseBody?: shared.GetShipmentByExternalIdResponseBody;
}
