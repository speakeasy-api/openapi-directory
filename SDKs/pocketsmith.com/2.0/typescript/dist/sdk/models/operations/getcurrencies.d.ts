import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCurrenciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    currencies?: shared.Currency[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
