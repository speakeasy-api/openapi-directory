import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAssetContributorsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetAssetContributorsRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * A asset ID filter for the schedule collection. This can be a reference to any type of asset i.e. movie, season, series or episode.
     */
    assetId: string;
}
export declare class GetAssetContributorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getAssetContributors200ApplicationJSONObject?: Record<string, any>;
}
