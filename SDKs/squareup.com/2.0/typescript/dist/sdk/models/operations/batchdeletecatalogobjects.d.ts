import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteCatalogObjectsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchDeleteCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteCatalogObjectsResponse?: shared.BatchDeleteCatalogObjectsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
