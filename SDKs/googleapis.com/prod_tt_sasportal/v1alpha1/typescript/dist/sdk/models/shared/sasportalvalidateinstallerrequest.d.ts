import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for ValidateInstaller.
 */
export declare class SasPortalValidateInstallerRequest extends SpeakeasyBase {
    /**
     * Required. JSON Web Token signed using a CPI private key. Payload must include a "secret" claim whose value is the secret.
     */
    encodedSecret?: string;
    /**
     * Required. Unique installer id (CPI ID) from the Certified Professional Installers database.
     */
    installerId?: string;
    /**
     * Required. Secret returned by the GenerateSecret.
     */
    secret?: string;
}
