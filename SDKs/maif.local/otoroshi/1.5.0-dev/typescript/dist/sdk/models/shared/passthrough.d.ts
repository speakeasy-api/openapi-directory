import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationSettings } from "./verificationsettings";
/**
 * Strategy where only signature and field values are verified
 */
export declare class PassThrough extends SpeakeasyBase {
    /**
     * String with value PassThrough
     */
    type: string;
    /**
     * Settings to verify the value of JWT token fields
     */
    verificationSettings: VerificationSettings;
}
