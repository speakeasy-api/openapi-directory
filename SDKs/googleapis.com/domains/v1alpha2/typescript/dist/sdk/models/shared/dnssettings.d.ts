import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDns } from "./customdns";
import { GlueRecord } from "./gluerecord";
import { GoogleDomainsDns, GoogleDomainsDnsInput } from "./googledomainsdns";
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
 */
export declare class DnsSettingsInput extends SpeakeasyBase {
    /**
     * Configuration for an arbitrary DNS provider.
     */
    customDns?: CustomDns;
    /**
     * The list of glue records for this `Registration`. Commonly empty.
     */
    glueRecords?: GlueRecord[];
    /**
     * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
     */
    googleDomainsDns?: GoogleDomainsDnsInput;
}
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
 */
export declare class DnsSettings extends SpeakeasyBase {
    /**
     * Configuration for an arbitrary DNS provider.
     */
    customDns?: CustomDns;
    /**
     * The list of glue records for this `Registration`. Commonly empty.
     */
    glueRecords?: GlueRecord[];
    /**
     * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
     */
    googleDomainsDns?: GoogleDomainsDns;
}
