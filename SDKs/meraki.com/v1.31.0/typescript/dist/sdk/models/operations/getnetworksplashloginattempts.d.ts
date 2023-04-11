import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Only return the login attempts for the specified SSID
 */
export declare enum GetNetworkSplashLoginAttemptsSsidNumberEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14"
}
export declare class GetNetworkSplashLoginAttemptsRequest extends SpeakeasyBase {
    /**
     * The username, email, or phone number used during login
     */
    loginIdentifier?: string;
    networkId: string;
    /**
     * Only return the login attempts for the specified SSID
     */
    ssidNumber?: GetNetworkSplashLoginAttemptsSsidNumberEnum;
    /**
     * The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months
     */
    timespan?: number;
}
export declare class GetNetworkSplashLoginAttemptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSplashLoginAttempts200ApplicationJSONObjects?: Record<string, any>[];
}
