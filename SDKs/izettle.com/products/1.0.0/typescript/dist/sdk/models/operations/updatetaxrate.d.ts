import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTaxRateSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class UpdateTaxRateRequest extends SpeakeasyBase {
    taxRateUpdateRequest: shared.TaxRateUpdateRequest;
    taxRateUuid: string;
}
export declare class UpdateTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Updated tax rate
     */
    taxRate?: shared.TaxRate;
}
