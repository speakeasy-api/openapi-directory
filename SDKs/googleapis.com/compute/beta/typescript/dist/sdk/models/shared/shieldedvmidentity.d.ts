import { SpeakeasyBase } from "../../../internal/utils";
import { ShieldedVmIdentityEntry } from "./shieldedvmidentityentry";
/**
 * A Shielded VM Identity.
 */
export declare class ShieldedVmIdentity extends SpeakeasyBase {
    /**
     * A Shielded Instance Identity Entry.
     */
    encryptionKey?: ShieldedVmIdentityEntry;
    /**
     * [Output Only] Type of the resource. Always compute#shieldedVmIdentity for shielded VM identity entry.
     */
    kind?: string;
    /**
     * A Shielded Instance Identity Entry.
     */
    signingKey?: ShieldedVmIdentityEntry;
}
