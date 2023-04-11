import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpsertCatalogObjectsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class BatchUpsertCatalogObjectsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpsertCatalogObjectsResponse?: shared.BatchUpsertCatalogObjectsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
