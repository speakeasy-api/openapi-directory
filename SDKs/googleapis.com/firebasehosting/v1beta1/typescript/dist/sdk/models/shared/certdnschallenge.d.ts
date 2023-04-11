import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a DNS certificate challenge.
 */
export declare class CertDnsChallenge extends SpeakeasyBase {
    /**
     * The domain name upon which the DNS challenge must be satisfied.
     */
    domainName?: string;
    /**
     * The value that must be present as a TXT record on the domain name to satisfy the challenge.
     */
    token?: string;
}
