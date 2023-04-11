import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the algorithm used to calculate this digest.
 */
export declare enum DnsKeyDigestTypeEnum {
    Sha1 = "sha1",
    Sha256 = "sha256",
    Sha384 = "sha384"
}
export declare class DnsKeyDigest extends SpeakeasyBase {
    /**
     * The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
     */
    digest?: string;
    /**
     * Specifies the algorithm used to calculate this digest.
     */
    type?: DnsKeyDigestTypeEnum;
}
