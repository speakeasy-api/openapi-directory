package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsuranceNetwork
 * A single insurance network. Next id: 5
**/
public class InsuranceNetwork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkId")
    public String networkId;
    public InsuranceNetwork withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkNames")
    public java.util.Map<String, String> networkNames;
    public InsuranceNetwork withNetworkNames(java.util.Map<String, String> networkNames) {
        this.networkNames = networkNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payerNames")
    public java.util.Map<String, String> payerNames;
    public InsuranceNetwork withPayerNames(java.util.Map<String, String> payerNames) {
        this.payerNames = payerNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InsuranceNetworkStateEnum state;
    public InsuranceNetwork withState(InsuranceNetworkStateEnum state) {
        this.state = state;
        return this;
    }
}