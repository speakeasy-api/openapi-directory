import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelShipmentsPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class CancelShipmentsRequest extends SpeakeasyBase {
    pathParams: CancelShipmentsPathParams;
}
export declare class CancelShipmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
