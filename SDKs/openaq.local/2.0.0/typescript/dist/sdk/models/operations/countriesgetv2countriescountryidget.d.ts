import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountriesGetV2CountriesCountryIdGetPathParams extends SpeakeasyBase {
    countryId: string;
}
export declare class CountriesGetV2CountriesCountryIdGetQueryParams extends SpeakeasyBase {
    country?: string[];
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
}
export declare class CountriesGetV2CountriesCountryIdGetRequest extends SpeakeasyBase {
    pathParams: CountriesGetV2CountriesCountryIdGetPathParams;
    queryParams: CountriesGetV2CountriesCountryIdGetQueryParams;
}
export declare class CountriesGetV2CountriesCountryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
