import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for the ExchangeDeviceCheckToken method.
 */
export declare class GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
    /**
     * Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object.
     */
    deviceToken?: string;
}
