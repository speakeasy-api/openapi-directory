import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDevicesRequest extends SpeakeasyBase {
    /**
     * Number of devices to return, 1000 is the default as well as the max.
     */
    batchSize?: number;
    /**
     * If the network has more devices than the batch size, a batch token will be returned
     *
     * @remarks
     *     as a part of the device list. To see the remainder of the devices, pass in the batchToken as a parameter in the next request.
     *     Requests made with the batchToken do not require additional parameters as the batchToken includes the parameters passed in
     *     with the original request. Additional parameters passed in with the batchToken will be ignored.
     */
    batchToken?: string;
    /**
     * Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.
     *
     * @remarks
     *     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,
     *     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,
     *     ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,
     *     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,
     *     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,
     *     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion.
     */
    fields?: string;
    /**
     * Filter devices by id(s). Multiple ids can be passed in as comma separated values.
     */
    ids?: string;
    networkId: string;
    /**
     * Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values.
     */
    scope?: string;
    /**
     * Filter devices by serial(s). Multiple serials can be passed in as comma separated values.
     */
    serials?: string;
    /**
     * Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values.
     */
    wifiMacs?: string;
}
export declare class GetNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDevices200ApplicationJSONObject?: Record<string, any>;
}
