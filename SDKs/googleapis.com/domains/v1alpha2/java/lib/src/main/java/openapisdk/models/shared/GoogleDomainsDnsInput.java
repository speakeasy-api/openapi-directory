package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDomainsDnsInput
 * Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
**/
public class GoogleDomainsDnsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsState")
    public GoogleDomainsDnsDsStateEnum dsState;
    public GoogleDomainsDnsInput withDsState(GoogleDomainsDnsDsStateEnum dsState) {
        this.dsState = dsState;
        return this;
    }
}