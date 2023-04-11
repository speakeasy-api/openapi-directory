import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchRetrieveCatalogObjectsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchRetrieveCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchRetrieveCatalogObjectsResponse?: shared.BatchRetrieveCatalogObjectsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
