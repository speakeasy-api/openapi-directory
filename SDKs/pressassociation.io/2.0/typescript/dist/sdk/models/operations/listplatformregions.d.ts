import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPlatformRegionsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListPlatformRegionsRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * The identifier for the selected platform.
     */
    platformId: string;
}
export declare class ListPlatformRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listPlatformRegions200ApplicationJSONObject?: Record<string, any>;
}
