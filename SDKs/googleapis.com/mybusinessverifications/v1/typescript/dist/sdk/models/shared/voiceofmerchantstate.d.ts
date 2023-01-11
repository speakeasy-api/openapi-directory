import { SpeakeasyBase } from "../../../internal/utils";
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";
/**
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
export declare class VoiceOfMerchantState extends SpeakeasyBase {
    complyWithGuidelines?: ComplyWithGuidelines;
    hasBusinessAuthority?: boolean;
    hasVoiceOfMerchant?: boolean;
    resolveOwnershipConflict?: Record<string, any>;
    verify?: Verify;
    waitForVoiceOfMerchant?: Record<string, any>;
}
