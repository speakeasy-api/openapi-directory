import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAssetSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
     */
    assetId: string;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getAsset200ApplicationJSONObject?: Record<string, any>;
}
