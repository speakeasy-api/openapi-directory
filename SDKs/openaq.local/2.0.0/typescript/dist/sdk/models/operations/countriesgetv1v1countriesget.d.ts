import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CountriesGetv1V1CountriesGetQueryParams extends SpeakeasyBase {
    country?: string[];
    countryId?: string;
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
}
export declare class CountriesGetv1V1CountriesGetRequest extends SpeakeasyBase {
    queryParams: CountriesGetv1V1CountriesGetQueryParams;
}
export declare class CountriesGetv1V1CountriesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQCountriesResult?: shared.OpenAqCountriesResult;
    statusCode: number;
}
