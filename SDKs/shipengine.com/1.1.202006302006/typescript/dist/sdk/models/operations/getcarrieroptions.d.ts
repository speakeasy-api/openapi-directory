import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCarrierOptionsPathParams extends SpeakeasyBase {
    carrierId: string;
}
export declare class GetCarrierOptionsRequest extends SpeakeasyBase {
    pathParams: GetCarrierOptionsPathParams;
}
export declare class GetCarrierOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getCarrierOptionsResponseBody?: shared.GetCarrierOptionsResponseBody;
}
