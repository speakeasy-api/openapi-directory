import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductCountForAllTaxesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Count of products for each tax rate
     */
    taxRateProductCountResponse?: shared.TaxRateProductCountResponse;
}
