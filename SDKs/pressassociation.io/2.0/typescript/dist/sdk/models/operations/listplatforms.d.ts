import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListPlatformsSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListPlatformsRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
}
export declare class ListPlatformsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listPlatforms200ApplicationJSONObject?: Record<string, any>;
}
