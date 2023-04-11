import { SpeakeasyBase } from "../../../internal/utils";
import { DnsSettingsInput } from "./dnssettings";
/**
 * Request for the `ConfigureDnsSettings` method.
 */
export declare class ConfigureDnsSettingsRequestInput extends SpeakeasyBase {
    /**
     * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
     */
    dnsSettings?: DnsSettingsInput;
    /**
     * Required. The field mask describing which fields to update as a comma-separated list. For example, if only the name servers are being updated for an existing Custom DNS configuration, the `update_mask` is `"custom_dns.name_servers"`. When changing the DNS provider from one type to another, pass the new provider's field name as part of the field mask. For example, when changing from a Google Domains DNS configuration to a Custom DNS configuration, the `update_mask` is `"custom_dns"`. //
     */
    updateMask?: string;
    /**
     * Validate the request without actually updating the DNS settings.
     */
    validateOnly?: boolean;
}
