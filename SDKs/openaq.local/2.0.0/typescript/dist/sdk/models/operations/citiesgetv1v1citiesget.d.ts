import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CitiesGetv1V1CitiesGetQueryParams extends SpeakeasyBase {
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
export declare class CitiesGetv1V1CitiesGetRequest extends SpeakeasyBase {
    queryParams: CitiesGetv1V1CitiesGetQueryParams;
}
export declare class CitiesGetv1V1CitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQCitiesResult?: shared.OpenAqCitiesResult;
    statusCode: number;
}
