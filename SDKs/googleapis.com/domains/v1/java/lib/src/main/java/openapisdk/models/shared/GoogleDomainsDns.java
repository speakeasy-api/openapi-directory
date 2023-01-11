package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDomainsDns
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
public class GoogleDomainsDns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsRecords")
    public DsRecord[] dsRecords;
    public GoogleDomainsDns withDsRecords(DsRecord[] dsRecords) {
        this.dsRecords = dsRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsState")
    public GoogleDomainsDnsDsStateEnum dsState;
    public GoogleDomainsDns withDsState(GoogleDomainsDnsDsStateEnum dsState) {
        this.dsState = dsState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameServers")
    public String[] nameServers;
    public GoogleDomainsDns withNameServers(String[] nameServers) {
        this.nameServers = nameServers;
        return this;
    }
}