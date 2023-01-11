package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsSettings
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
public class DnsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDns")
    public CustomDns customDns;
    public DnsSettings withCustomDns(CustomDns customDns) {
        this.customDns = customDns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glueRecords")
    public GlueRecord[] glueRecords;
    public DnsSettings withGlueRecords(GlueRecord[] glueRecords) {
        this.glueRecords = glueRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleDomainsDns")
    public GoogleDomainsDns googleDomainsDns;
    public DnsSettings withGoogleDomainsDns(GoogleDomainsDns googleDomainsDns) {
        this.googleDomainsDns = googleDomainsDns;
        return this;
    }
}