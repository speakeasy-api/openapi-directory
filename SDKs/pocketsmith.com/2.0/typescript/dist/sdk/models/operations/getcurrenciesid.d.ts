import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCurrenciesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the currency.
     */
    id: string;
}
export declare class GetCurrenciesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    currency?: shared.Currency;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
