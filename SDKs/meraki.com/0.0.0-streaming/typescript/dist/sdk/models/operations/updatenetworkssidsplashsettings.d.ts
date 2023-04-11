import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSsidSplashSettingsRequestBody extends SpeakeasyBase {
    /**
     * [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl'
     */
    splashUrl?: string;
    /**
     * [optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL.
     */
    useSplashUrl?: boolean;
}
export declare class UpdateNetworkSsidSplashSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSsidSplashSettingsRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSsidSplashSettings200ApplicationJSONObject?: Record<string, any>;
}
