import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCarrierSettingsPathParams extends SpeakeasyBase {
    carrierId: string;
    carrierName: shared.CarrierNameWithSettingsEnum;
}
export declare class UpdateCarrierSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateCarrierSettingsPathParams;
    request: any;
}
export declare class UpdateCarrierSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
