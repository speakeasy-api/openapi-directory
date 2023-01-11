package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProvisioningQuotasResponse
 * Response message for the list of provisioning quotas.
**/
public class ListProvisioningQuotasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListProvisioningQuotasResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provisioningQuotas")
    public ProvisioningQuota[] provisioningQuotas;
    public ListProvisioningQuotasResponse withProvisioningQuotas(ProvisioningQuota[] provisioningQuotas) {
        this.provisioningQuotas = provisioningQuotas;
        return this;
    }
}