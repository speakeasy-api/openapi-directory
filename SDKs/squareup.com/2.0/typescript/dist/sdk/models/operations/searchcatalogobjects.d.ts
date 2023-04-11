import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchCatalogObjectsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchCatalogObjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchCatalogObjectsResponse?: shared.SearchCatalogObjectsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
