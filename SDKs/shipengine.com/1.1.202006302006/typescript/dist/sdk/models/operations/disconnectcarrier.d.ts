import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisconnectCarrierPathParams extends SpeakeasyBase {
    carrierId: string;
    carrierName: shared.CarrierNameEnum;
}
export declare class DisconnectCarrierRequest extends SpeakeasyBase {
    pathParams: DisconnectCarrierPathParams;
}
export declare class DisconnectCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
