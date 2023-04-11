import { SpeakeasyBase } from "../../../internal/utils";
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";
/**
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
 */
export declare class VoiceOfMerchantState extends SpeakeasyBase {
    /**
     * Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
     */
    complyWithGuidelines?: ComplyWithGuidelines;
    /**
     * Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true).
     */
    hasBusinessAuthority?: boolean;
    /**
     * Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase.
     */
    hasVoiceOfMerchant?: boolean;
    /**
     * Indicates that the location duplicates another location that is in good standing.
     */
    resolveOwnershipConflict?: Record<string, any>;
    /**
     * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
     */
    verify?: Verify;
    /**
     * Indicates that the location will gain voice of merchant after passing review.
     */
    waitForVoiceOfMerchant?: Record<string, any>;
}
