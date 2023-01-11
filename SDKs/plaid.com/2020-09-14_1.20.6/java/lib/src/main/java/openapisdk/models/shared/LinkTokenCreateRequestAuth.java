package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkTokenCreateRequestAuth
 * Specifies options for initializing Link for use with the Auth product. This field is currently only required if using the Flexible Auth product (currently in closed beta).
**/
public class LinkTokenCreateRequestAuth {
    @JsonProperty("flow_type")
    public LinkTokenCreateRequestAuthFlowTypeEnum flowType;
    public LinkTokenCreateRequestAuth withFlowType(LinkTokenCreateRequestAuthFlowTypeEnum flowType) {
        this.flowType = flowType;
        return this;
    }
}