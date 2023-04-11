import { SpeakeasyBase } from "../../../internal/utils";
import { TransformSettings } from "./transformsettings";
import { VerificationSettings } from "./verificationsettings";
/**
 * Strategy where signature and field values are verified, trasnformed and then token si re-signed
 */
export declare class Transform extends SpeakeasyBase {
    algoSettings: any;
    /**
     * Settings to transform a JWT token and its location
     */
    transformSettings?: TransformSettings;
    /**
     * String with value Transform
     */
    type: string;
    /**
     * Settings to verify the value of JWT token fields
     */
    verificationSettings: VerificationSettings;
}
