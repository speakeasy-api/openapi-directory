package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicGroupStatus
 * The current status of a dynamic group along with timestamp.
**/
public class DynamicGroupStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DynamicGroupStatusStatusEnum status;
    public DynamicGroupStatus withStatus(DynamicGroupStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusTime")
    public String statusTime;
    public DynamicGroupStatus withStatusTime(String statusTime) {
        this.statusTime = statusTime;
        return this;
    }
}