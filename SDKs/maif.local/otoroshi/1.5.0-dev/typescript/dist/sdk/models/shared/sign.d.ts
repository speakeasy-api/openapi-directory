import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationSettings } from "./verificationsettings";
/**
 * Strategy where signature and field values are verified, and then token si re-signed
 */
export declare class Sign extends SpeakeasyBase {
    algoSettings: any;
    /**
     * String with value Sign
     */
    type: string;
    /**
     * Settings to verify the value of JWT token fields
     */
    verificationSettings: VerificationSettings;
}
