package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsVmsDetails
 * AWSVmsDetails describes VMs in AWS.
**/
public class AwsVmsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public AwsVmDetails[] details;
    public AwsVmsDetails withDetails(AwsVmDetails[] details) {
        this.details = details;
        return this;
    }
}