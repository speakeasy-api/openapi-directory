import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConsumerV1CustomersCountriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    countryViewModels?: shared.CountryViewModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
