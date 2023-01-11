import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCarrierSettingsPathParams extends SpeakeasyBase {
    carrierId: string;
    carrierName: shared.CarrierNameWithSettingsEnum;
}
export declare class GetCarrierSettingsRequest extends SpeakeasyBase {
    pathParams: GetCarrierSettingsPathParams;
}
export declare class GetCarrierSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getCarrierSettingsResponseBody?: any;
}
