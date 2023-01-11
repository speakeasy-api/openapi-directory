package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCellularGatewaySubnetPoolRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidr")
    public String cidr;
    public UpdateNetworkCellularGatewaySubnetPoolRequestBody withCidr(String cidr) {
        this.cidr = cidr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mask")
    public Long mask;
    public UpdateNetworkCellularGatewaySubnetPoolRequestBody withMask(Long mask) {
        this.mask = mask;
        return this;
    }
}