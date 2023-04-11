import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCatalogueAssetSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetCatalogueAssetRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * The identifier for the selected catalogue.
     */
    catalogueId: string;
    /**
     * The End Date for the catalogue date range.
     */
    end?: string;
    /**
     * Restrict number of returned items Min = 1, Max = 500.
     */
    limit?: number;
    /**
     * The Start Date for the catalogue date range.
     */
    start?: string;
    /**
     * The query string for a title search
     */
    title?: string;
    /**
     * Retrieve items only that have been updated after this point.
     */
    updatedAfter?: string;
}
export declare class GetCatalogueAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCatalogueAsset200ApplicationJSONObject?: Record<string, any>;
}
