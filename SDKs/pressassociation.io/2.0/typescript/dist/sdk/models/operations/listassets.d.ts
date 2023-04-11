import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListAssetsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListAssetsRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * Limit the the number of items to be returned per page. For example: 5.
     */
    limit?: number;
    /**
     * Updated After
     */
    updatedAfter?: string;
}
export declare class ListAssetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listAssets200ApplicationJSONObject?: Record<string, any>;
}
