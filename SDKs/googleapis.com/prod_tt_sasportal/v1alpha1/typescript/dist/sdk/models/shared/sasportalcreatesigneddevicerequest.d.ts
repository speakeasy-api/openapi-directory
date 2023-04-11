import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for CreateSignedDevice.
 */
export declare class SasPortalCreateSignedDeviceRequest extends SpeakeasyBase {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
     */
    encodedDevice?: string;
    /**
     * Required. Unique installer id (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string;
}
