import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeviceCode extends SpeakeasyBase {
    /**
     * The unique code that can be used to login.
     */
    code?: string;
    /**
     * When this DeviceCode was created. Timestamp in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The unique id of the device that used this code. Populated when the device is paired up.
     */
    deviceId?: string;
    /**
     * The unique id for this device code.
     */
    id?: string;
    /**
     * The location assigned to this code.
     */
    locationId?: string;
    /**
     * An optional user-defined name for the device code.
     */
    name?: string;
    /**
     * When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format.
     */
    pairBy?: string;
    /**
     * When this DeviceCode was paired. Timestamp in RFC 3339 format.
     */
    pairedAt?: string;
    /**
     * The targeting product type of the device code.
     */
    productType: string;
    /**
     * The pairing status of the device code.
     */
    status?: string;
    /**
     * When this DeviceCode's status was last changed. Timestamp in RFC 3339 format.
     */
    statusChangedAt?: string;
}
