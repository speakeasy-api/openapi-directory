package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FetchInventoryResponse
 * Response message for fetchInventory.
**/
public class FetchInventoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsVms")
    public AwsVmsDetails awsVms;
    public FetchInventoryResponse withAwsVms(AwsVmsDetails awsVms) {
        this.awsVms = awsVms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FetchInventoryResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public FetchInventoryResponse withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmwareVms")
    public VmwareVmsDetails vmwareVms;
    public FetchInventoryResponse withVmwareVms(VmwareVmsDetails vmwareVms) {
        this.vmwareVms = vmwareVms;
        return this;
    }
}