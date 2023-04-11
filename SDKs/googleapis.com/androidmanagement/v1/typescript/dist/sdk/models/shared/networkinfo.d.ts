import { SpeakeasyBase } from "../../../internal/utils";
import { TelephonyInfo } from "./telephonyinfo";
/**
 * Device network info.
 */
export declare class NetworkInfo extends SpeakeasyBase {
    /**
     * IMEI number of the GSM device. For example, A1000031212.
     */
    imei?: string;
    /**
     * MEID number of the CDMA device. For example, A00000292788E1.
     */
    meid?: string;
    /**
     * Alphabetic name of current registered operator. For example, Vodafone.
     */
    networkOperatorName?: string;
    /**
     * Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23.
     */
    telephonyInfos?: TelephonyInfo[];
    /**
     * Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.
     */
    wifiMacAddress?: string;
}
