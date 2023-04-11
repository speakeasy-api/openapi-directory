import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageSearchRequest extends SpeakeasyBase {
    /**
     * active status active : 1, inactive : 2, all 3, deafult : 1
     */
    activeStatus?: number;
    /**
     * Packge Category Id
     */
    categoryId?: number;
    /**
     * End Price of the price Range
     */
    endPrice?: number;
    /**
     * primary key of TL gym entity
     */
    gymId?: number;
    /**
     * number of recode in result and default is 100. use negative numbers to order by desc
     */
    limit?: number;
    /**
     * number of recodes to skip
     */
    offset?: number;
    /**
     * order by column.!-- invalid column will give internal server error
     */
    orderBy?: string;
    /**
     * 1 : MRM, 2 : Mobile
     */
    requestSource?: number;
    /**
     * part of package name
     */
    searchText?: string;
    /**
     * Start price of the price Range
     */
    startpPrice?: number;
    /**
     * filter package type.!-- default is 'all'
     */
    type?: string;
}
export declare class PackageSearchResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDTOOfListOfPackageSearchDTO?: shared.DefaultResponseDTOOfListOfPackageSearchDTO;
    /**
     * basic information of package entity
     */
    defaultResponseDTOOfPackageSearchDTOS?: shared.DefaultResponseDTOOfPackageSearchDTO[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
