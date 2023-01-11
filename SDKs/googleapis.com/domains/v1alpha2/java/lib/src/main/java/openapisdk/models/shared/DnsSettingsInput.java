package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsSettingsInput
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
public class DnsSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDns")
    public CustomDns customDns;
    public DnsSettingsInput withCustomDns(CustomDns customDns) {
        this.customDns = customDns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glueRecords")
    public GlueRecord[] glueRecords;
    public DnsSettingsInput withGlueRecords(GlueRecord[] glueRecords) {
        this.glueRecords = glueRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDomainsDns")
    public GoogleDomainsDnsInput googleDomainsDns;
    public DnsSettingsInput withGoogleDomainsDns(GoogleDomainsDnsInput googleDomainsDns) {
        this.googleDomainsDns = googleDomainsDns;
        return this;
    }
}