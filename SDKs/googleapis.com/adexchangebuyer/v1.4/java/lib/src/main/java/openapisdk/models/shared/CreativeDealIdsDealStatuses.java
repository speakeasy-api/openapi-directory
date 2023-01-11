package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeDealIdsDealStatuses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arcStatus")
    public String arcStatus;
    public CreativeDealIdsDealStatuses withArcStatus(String arcStatus) {
        this.arcStatus = arcStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public CreativeDealIdsDealStatuses withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public Integer webPropertyId;
    public CreativeDealIdsDealStatuses withWebPropertyId(Integer webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}