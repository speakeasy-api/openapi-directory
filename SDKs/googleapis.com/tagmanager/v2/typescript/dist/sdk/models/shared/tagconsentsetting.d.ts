import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.
 */
export declare enum TagConsentSettingConsentStatusEnum {
    NotSet = "notSet",
    NotNeeded = "notNeeded",
    Needed = "needed"
}
export declare class TagConsentSetting extends SpeakeasyBase {
    /**
     * The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.
     */
    consentStatus?: TagConsentSettingConsentStatusEnum;
    /**
     * Represents a Google Tag Manager Parameter.
     */
    consentType?: Parameter;
}
