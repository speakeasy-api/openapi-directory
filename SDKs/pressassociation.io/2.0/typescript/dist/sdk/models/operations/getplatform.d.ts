import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPlatformSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetPlatformRequest extends SpeakeasyBase {
    /**
     * The identifier for the selected platform.
     */
    platformId: string;
}
export declare class GetPlatformResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getPlatform200ApplicationJSONObject?: Record<string, any>;
}
