import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UALookupRequest extends SpeakeasyBase {
    /**
     * This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER
     */
    deviceBrand?: string;
    /**
     * For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL
     */
    deviceModel?: string;
    /**
     * The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'
     */
    ua: string;
    /**
     * For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData
     */
    uaMobile?: string;
    /**
     * For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData
     */
    uaPlatform?: string;
    /**
     * For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData
     */
    uaPlatformVersion?: string;
    /**
     * For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData
     */
    uaVersion?: string;
}
export declare class UALookupResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    uaLookupResponse?: shared.UALookupResponse;
}
