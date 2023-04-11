import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTaxRatesSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CreateTaxRatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Tax rates created
     */
    taxRatesResponse?: shared.TaxRatesResponse;
}
