import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSupportedCurrenciesV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List Supported Currencies
     */
    supportedCurrencyResponseV2?: shared.SupportedCurrencyResponseV2;
}
