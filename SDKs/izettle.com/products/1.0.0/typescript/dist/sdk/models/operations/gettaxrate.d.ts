import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaxRateSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetTaxRateRequest extends SpeakeasyBase {
    taxRateUuid: string;
}
export declare class GetTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Single tax rate
     */
    taxRate?: shared.TaxRate;
}
