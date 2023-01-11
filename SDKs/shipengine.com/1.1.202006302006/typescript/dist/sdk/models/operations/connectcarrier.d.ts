import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectCarrierPathParams extends SpeakeasyBase {
    carrierName: shared.CarrierNameEnum;
}
export declare class ConnectCarrierRequest extends SpeakeasyBase {
    pathParams: ConnectCarrierPathParams;
    request: any;
}
export declare class ConnectCarrierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    connectCarrierResponseBody?: shared.ConnectCarrierResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
