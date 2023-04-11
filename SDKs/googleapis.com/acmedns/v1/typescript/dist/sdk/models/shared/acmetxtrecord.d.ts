import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The TXT record message that represents an ACME DNS-01 challenge.
 */
export declare class AcmeTxtRecordInput extends SpeakeasyBase {
    /**
     * Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry.
     */
    digest?: string;
    /**
     * The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request.
     */
    fqdn?: string;
}
/**
 * The TXT record message that represents an ACME DNS-01 challenge.
 */
export declare class AcmeTxtRecord extends SpeakeasyBase {
    /**
     * Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry.
     */
    digest?: string;
    /**
     * The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request.
     */
    fqdn?: string;
    /**
     * Output only. The time when this record was last updated. This will be in UTC time.
     */
    updateTime?: string;
}
