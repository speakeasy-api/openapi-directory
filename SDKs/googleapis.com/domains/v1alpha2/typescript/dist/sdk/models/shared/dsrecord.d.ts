import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The algorithm used to generate the referenced DNSKEY.
 */
export declare enum DsRecordAlgorithmEnum {
    AlgorithmUnspecified = "ALGORITHM_UNSPECIFIED",
    Rsamd5 = "RSAMD5",
    Dh = "DH",
    Dsa = "DSA",
    Ecc = "ECC",
    Rsasha1 = "RSASHA1",
    Dsansec3Sha1 = "DSANSEC3SHA1",
    Rsasha1Nsec3Sha1 = "RSASHA1NSEC3SHA1",
    Rsasha256 = "RSASHA256",
    Rsasha512 = "RSASHA512",
    Eccgost = "ECCGOST",
    Ecdsap256Sha256 = "ECDSAP256SHA256",
    Ecdsap384Sha384 = "ECDSAP384SHA384",
    Ed25519 = "ED25519",
    Ed448 = "ED448",
    Indirect = "INDIRECT",
    Privatedns = "PRIVATEDNS",
    Privateoid = "PRIVATEOID"
}
/**
 * The hash function used to generate the digest of the referenced DNSKEY.
 */
export declare enum DsRecordDigestTypeEnum {
    DigestTypeUnspecified = "DIGEST_TYPE_UNSPECIFIED",
    Sha1 = "SHA1",
    Sha256 = "SHA256",
    Gost3411 = "GOST3411",
    Sha384 = "SHA384"
}
/**
 * Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.
 */
export declare class DsRecord extends SpeakeasyBase {
    /**
     * The algorithm used to generate the referenced DNSKEY.
     */
    algorithm?: DsRecordAlgorithmEnum;
    /**
     * The digest generated from the referenced DNSKEY.
     */
    digest?: string;
    /**
     * The hash function used to generate the digest of the referenced DNSKEY.
     */
    digestType?: DsRecordDigestTypeEnum;
    /**
     * The key tag of the record. Must be set in range 0 -- 65535.
     */
    keyTag?: number;
}
