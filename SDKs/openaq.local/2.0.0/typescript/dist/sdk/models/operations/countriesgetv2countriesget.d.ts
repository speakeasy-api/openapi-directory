import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountriesGetV2CountriesGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
}
export declare class CountriesGetV2CountriesGetRequest extends SpeakeasyBase {
    queryParams: CountriesGetV2CountriesGetQueryParams;
}
export declare class CountriesGetV2CountriesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
