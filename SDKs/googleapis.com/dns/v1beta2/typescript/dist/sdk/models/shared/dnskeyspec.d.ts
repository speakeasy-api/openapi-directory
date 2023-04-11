import { SpeakeasyBase } from "../../../internal/utils";
/**
 * String mnemonic specifying the DNSSEC algorithm of this key.
 */
export declare enum DnsKeySpecAlgorithmEnum {
    Rsasha1 = "rsasha1",
    Rsasha256 = "rsasha256",
    Rsasha512 = "rsasha512",
    Ecdsap256sha256 = "ecdsap256sha256",
    Ecdsap384sha384 = "ecdsap384sha384"
}
/**
 * Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets.
 */
export declare enum DnsKeySpecKeyTypeEnum {
    KeySigning = "keySigning",
    ZoneSigning = "zoneSigning"
}
/**
 * Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
 */
export declare class DnsKeySpec extends SpeakeasyBase {
    /**
     * String mnemonic specifying the DNSSEC algorithm of this key.
     */
    algorithm?: DnsKeySpecAlgorithmEnum;
    /**
     * Length of the keys in bits.
     */
    keyLength?: number;
    /**
     * Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). Key signing keys have the Secure Entry Point flag set and, when active, are only used to sign resource record sets of type DNSKEY. Zone signing keys do not have the Secure Entry Point flag set and are used to sign all other types of resource record sets.
     */
    keyType?: DnsKeySpecKeyTypeEnum;
    kind?: string;
}
