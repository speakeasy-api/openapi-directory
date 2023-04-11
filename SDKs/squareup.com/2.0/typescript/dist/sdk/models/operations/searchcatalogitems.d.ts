import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchCatalogItemsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchCatalogItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchCatalogItemsResponse?: shared.SearchCatalogItemsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
