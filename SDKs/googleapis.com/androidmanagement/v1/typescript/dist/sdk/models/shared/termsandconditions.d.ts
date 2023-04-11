import { SpeakeasyBase } from "../../../internal/utils";
import { UserFacingMessage } from "./userfacingmessage";
/**
 * A terms and conditions page to be accepted during provisioning.
 */
export declare class TermsAndConditions extends SpeakeasyBase {
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    content?: UserFacingMessage;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    header?: UserFacingMessage;
}
