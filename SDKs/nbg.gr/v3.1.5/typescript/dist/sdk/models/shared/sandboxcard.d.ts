import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxCardInfo } from "./sandboxcardinfo";
import { SandboxParty } from "./sandboxparty";
import { SandboxStatement } from "./sandboxstatement";
import { SandboxTransaction } from "./sandboxtransaction";
/**
 * Sandbox card
 */
export declare class SandboxCard extends SpeakeasyBase {
    /**
     * Sandbox card information
     */
    info?: SandboxCardInfo;
    /**
     * Connected party information
     */
    party?: SandboxParty;
    /**
     * Card statements
     */
    statements?: SandboxStatement[];
    /**
     * Card transactions
     */
    transactions?: SandboxTransaction[];
}
