import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceSoftwaresRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceSoftwares200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki managed application Id for this record on a particular device.
     */
    appId?: string;
    /**
     * The size of the software bundle.
     */
    bundleSize?: number;
    /**
     * When the Meraki record for the software was created.
     */
    createdAt?: string;
    /**
     * The Meraki managed device Id.
     */
    deviceId?: string;
    /**
     * The size of the data stored in the application.
     */
    dynamicSize?: number;
    /**
     * The Meraki software Id.
     */
    id?: string;
    /**
     * Software bundle identifier.
     */
    identifier?: string;
    /**
     * When the Software was installed on the device.
     */
    installedAt?: string;
    /**
     * A boolean indicating whether or not an iOS redemption code was used.
     */
    iosRedemptionCode?: boolean;
    /**
     * A boolean indicating whether or not the software is managed by Meraki.
     */
    isManaged?: boolean;
    /**
     * The itunes numerical identifier.
     */
    itunesId?: string;
    /**
     * The license key associated with this software installation.
     */
    licenseKey?: string;
    /**
     * The name of the software.
     */
    name?: string;
    /**
     * The path on the device where the software record is located.
     */
    path?: string;
    /**
     * The redemption code used for this software.
     */
    redemptionCode?: number;
    /**
     * Short version notation for the software.
     */
    shortVersion?: string;
    /**
     * The management status of the software.
     */
    status?: string;
    /**
     * A boolean indicating this software record should be installed on the associated device.
     */
    toInstall?: boolean;
    /**
     * A boolean indicating this software record should be uninstalled on the associated device.
     */
    toUninstall?: boolean;
    /**
     * When the record was uninstalled from the device.
     */
    uninstalledAt?: string;
    /**
     * When the record was last updated by Meraki.
     */
    updatedAt?: string;
    /**
     * The vendor of the software.
     */
    vendor?: string;
    /**
     * Full version notation for the software.
     */
    version?: string;
}
export declare class GetNetworkSmDeviceSoftwaresResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceSoftwares200ApplicationJSONObjects?: GetNetworkSmDeviceSoftwares200ApplicationJSON[];
}
