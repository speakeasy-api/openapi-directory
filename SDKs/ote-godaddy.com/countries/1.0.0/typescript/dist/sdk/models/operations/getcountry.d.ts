import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCountryPathParams extends SpeakeasyBase {
    countryKey: string;
}
export declare enum GetCountryOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare enum GetCountrySortEnum {
    Key = "key",
    Label = "label"
}
export declare class GetCountryQueryParams extends SpeakeasyBase {
    marketId: string;
    order?: GetCountryOrderEnum;
    sort?: GetCountrySortEnum;
}
export declare class GetCountryRequest extends SpeakeasyBase {
    pathParams: GetCountryPathParams;
    queryParams: GetCountryQueryParams;
}
export declare class GetCountryResponse extends SpeakeasyBase {
    arrayOfCountry?: any[];
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
