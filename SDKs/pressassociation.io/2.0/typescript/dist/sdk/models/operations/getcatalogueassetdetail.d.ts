import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCatalogueAssetDetailSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetCatalogueAssetDetailRequest extends SpeakeasyBase {
    /**
     * The identifier for the selected catalogue asset.
     */
    assetId: string;
    /**
     * The identifier for the selected catalogue.
     */
    catalogueId: string;
}
export declare class GetCatalogueAssetDetailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCatalogueAssetDetail200ApplicationJSONObject?: Record<string, any>;
}
