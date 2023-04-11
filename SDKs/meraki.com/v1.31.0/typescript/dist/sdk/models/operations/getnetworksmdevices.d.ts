import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDevicesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Additional fields that will be displayed for each device.
     *
     * @remarks
     *     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,
     *     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,
     *     ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,
     *     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,
     *     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,
     *     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, androidSecurityPatchVersion, and url.
     */
    fields?: string[];
    /**
     * Filter devices by id(s).
     */
    ids?: string[];
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags.
     */
    scope?: string[];
    /**
     * Filter devices by serial(s).
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * Filter devices by wifi mac(s).
     */
    wifiMacs?: string[];
}
export declare class GetNetworkSmDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Id of the device record.
     */
    id?: string;
    /**
     * The IP address of the device.
     */
    ip?: string;
    /**
     * The name of the device.
     */
    name?: string;
    /**
     * Notes associated with the device.
     */
    notes?: string;
    /**
     * The name of the device OS.
     */
    osName?: string;
    /**
     * The device serial.
     */
    serial?: string;
    /**
     * The device serial number.
     */
    serialNumber?: string;
    /**
     * The name of the SSID the device was last connected to.
     */
    ssid?: string;
    /**
     * The device model.
     */
    systemModel?: string;
    /**
     * An array of tags associated with the device.
     */
    tags?: string[];
    /**
     * The UUID of the device.
     */
    uuid?: string;
    /**
     * The MAC of the device.
     */
    wifiMac?: string;
}
export declare class GetNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDevices200ApplicationJSONObjects?: GetNetworkSmDevices200ApplicationJSON[];
}
