import { SpeakeasyBase } from "../../../internal/utils";
import { DsRecord } from "./dsrecord";
/**
 * Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC.
 */
export declare enum GoogleDomainsDnsDsStateEnum {
    DsStateUnspecified = "DS_STATE_UNSPECIFIED",
    DsRecordsUnpublished = "DS_RECORDS_UNPUBLISHED",
    DsRecordsPublished = "DS_RECORDS_PUBLISHED"
}
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
 */
export declare class GoogleDomainsDnsInput extends SpeakeasyBase {
    /**
     * Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC.
     */
    dsState?: GoogleDomainsDnsDsStateEnum;
}
/**
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
 */
export declare class GoogleDomainsDns extends SpeakeasyBase {
    /**
     * Output only. The list of DS records published for this domain. The list is automatically populated when `ds_state` is `DS_RECORDS_PUBLISHED`, otherwise it remains empty.
     */
    dsRecords?: DsRecord[];
    /**
     * Required. The state of DS records for this domain. Used to enable or disable automatic DNSSEC.
     */
    dsState?: GoogleDomainsDnsDsStateEnum;
    /**
     * Output only. A list of name servers that store the DNS zone for this domain. Each name server is a domain name, with Unicode domain names expressed in Punycode format. This field is automatically populated with the name servers assigned to the Google Domains DNS zone.
     */
    nameServers?: string[];
}
