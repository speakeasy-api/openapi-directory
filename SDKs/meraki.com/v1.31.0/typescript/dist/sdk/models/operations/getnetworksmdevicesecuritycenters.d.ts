import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceSecurityCentersRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceSecurityCenters200ApplicationJSON extends SpeakeasyBase {
    /**
     * The name of the Antivirus.
     */
    antiVirusName?: string;
    /**
     * The name of the Firewall.
     */
    fireWallName?: string;
    /**
     * Boolean indicating if the device has Antivirus.
     */
    hasAntiVirus?: boolean;
    /**
     * Boolean indicating if the device has a Firewall installed.
     */
    hasFireWallInstalled?: boolean;
    /**
     * The Meraki identifier for the security center record.
     */
    id?: string;
    /**
     * Boolean indicating if the device has auto login disabled.
     */
    isAutoLoginDisabled?: boolean;
    /**
     * Boolean indicating if the device has disk encryption.
     */
    isDiskEncrypted?: boolean;
    /**
     * Boolean indicating if the device has a Firewall enabled.
     */
    isFireWallEnabled?: boolean;
    /**
     * Boolean indicating if the device is rooted.
     */
    isRooted?: boolean;
    /**
     * A comma seperated list of procs running on the device.
     */
    runningProcs?: string;
}
export declare class GetNetworkSmDeviceSecurityCentersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceSecurityCenters200ApplicationJSONObjects?: GetNetworkSmDeviceSecurityCenters200ApplicationJSON[];
}
