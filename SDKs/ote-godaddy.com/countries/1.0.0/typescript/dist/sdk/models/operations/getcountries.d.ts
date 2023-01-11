import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCountriesOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare enum GetCountriesSortEnum {
    Key = "key",
    Label = "label"
}
export declare class GetCountriesQueryParams extends SpeakeasyBase {
    marketId: string;
    order?: GetCountriesOrderEnum;
    regionName?: string;
    regionTypeId?: number;
    sort?: GetCountriesSortEnum;
}
export declare class GetCountriesRequest extends SpeakeasyBase {
    queryParams: GetCountriesQueryParams;
}
export declare class GetCountriesResponse extends SpeakeasyBase {
    arrayOfCountrySummary?: any[];
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
