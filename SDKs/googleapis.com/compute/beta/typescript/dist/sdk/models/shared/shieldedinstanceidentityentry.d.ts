import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Shielded Instance Identity Entry.
 */
export declare class ShieldedInstanceIdentityEntry extends SpeakeasyBase {
    /**
     * A PEM-encoded X.509 certificate. This field can be empty.
     */
    ekCert?: string;
    /**
     * A PEM-encoded public key.
     */
    ekPub?: string;
}
