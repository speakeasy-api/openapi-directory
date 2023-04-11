import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for UpdateSignedDevice.
 */
export declare class SasPortalUpdateSignedDeviceRequest extends SpeakeasyBase {
    /**
     * Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set.
     */
    encodedDevice?: string;
    /**
     * Required. Unique installer ID (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string;
}
