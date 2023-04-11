import { SpeakeasyBase } from "../../../internal/utils";
import { ShieldedInstanceIdentityEntry } from "./shieldedinstanceidentityentry";
/**
 * A Shielded Instance Identity.
 */
export declare class ShieldedInstanceIdentity extends SpeakeasyBase {
    /**
     * A Shielded Instance Identity Entry.
     */
    eccP256EncryptionKey?: ShieldedInstanceIdentityEntry;
    /**
     * A Shielded Instance Identity Entry.
     */
    eccP256SigningKey?: ShieldedInstanceIdentityEntry;
    /**
     * A Shielded Instance Identity Entry.
     */
    encryptionKey?: ShieldedInstanceIdentityEntry;
    /**
     * [Output Only] Type of the resource. Always compute#shieldedInstanceIdentity for shielded Instance identity entry.
     */
    kind?: string;
    /**
     * A Shielded Instance Identity Entry.
     */
    signingKey?: ShieldedInstanceIdentityEntry;
}
