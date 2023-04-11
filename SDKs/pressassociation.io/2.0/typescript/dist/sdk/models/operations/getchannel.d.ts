import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChannelSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetChannelRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * The identifier for the selected channel.
     */
    channelId: string;
}
export declare class GetChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getChannel200ApplicationJSONObject?: Record<string, any>;
}
