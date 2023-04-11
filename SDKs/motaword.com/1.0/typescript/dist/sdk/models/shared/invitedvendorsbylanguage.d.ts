import { SpeakeasyBase } from "../../../internal/utils";
import { InvitedVendor } from "./invitedvendor";
export declare class InvitedVendorsByLanguage extends SpeakeasyBase {
    /**
     * Invited vendors for this target language
     */
    invitedVendors?: InvitedVendor[];
    /**
     * Target Language that the vendors invited for
     */
    targetLanguage?: string;
}
