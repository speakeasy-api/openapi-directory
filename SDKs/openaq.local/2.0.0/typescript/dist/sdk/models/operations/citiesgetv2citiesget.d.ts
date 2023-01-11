import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CitiesGetV2CitiesGetQueryParams extends SpeakeasyBase {
    city?: string[];
    country?: string[];
    countryId?: string;
    entity?: string;
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
}
export declare class CitiesGetV2CitiesGetRequest extends SpeakeasyBase {
    queryParams: CitiesGetV2CitiesGetQueryParams;
}
export declare class CitiesGetV2CitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQCitiesResult?: shared.OpenAqCitiesResult;
    statusCode: number;
}
