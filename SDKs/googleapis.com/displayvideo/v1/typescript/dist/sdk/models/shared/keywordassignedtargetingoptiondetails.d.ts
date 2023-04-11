import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.
 */
export declare class KeywordAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The keyword, for example `car insurance`. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10.
     */
    keyword?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
}
