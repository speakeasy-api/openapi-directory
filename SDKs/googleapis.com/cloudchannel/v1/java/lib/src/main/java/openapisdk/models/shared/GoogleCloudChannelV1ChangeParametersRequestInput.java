package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ChangeParametersRequestInput
 * Request message for CloudChannelService.ChangeParametersRequest.
**/
public class GoogleCloudChannelV1ChangeParametersRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public GoogleCloudChannelV1ParameterInput[] parameters;
    public GoogleCloudChannelV1ChangeParametersRequestInput withParameters(GoogleCloudChannelV1ParameterInput[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderId")
    public String purchaseOrderId;
    public GoogleCloudChannelV1ChangeParametersRequestInput withPurchaseOrderId(String purchaseOrderId) {
        this.purchaseOrderId = purchaseOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GoogleCloudChannelV1ChangeParametersRequestInput withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}