package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClaimIntoOrganizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licenses")
    public ClaimIntoOrganizationRequestBodyLicenses[] licenses;
    public ClaimIntoOrganizationRequestBody withLicenses(ClaimIntoOrganizationRequestBodyLicenses[] licenses) {
        this.licenses = licenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orders")
    public String[] orders;
    public ClaimIntoOrganizationRequestBody withOrders(String[] orders) {
        this.orders = orders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serials")
    public String[] serials;
    public ClaimIntoOrganizationRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
}