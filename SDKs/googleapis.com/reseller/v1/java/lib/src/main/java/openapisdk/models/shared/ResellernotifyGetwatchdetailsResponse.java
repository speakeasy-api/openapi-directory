package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResellernotifyGetwatchdetailsResponse
 * JSON template for resellernotify getwatchdetails response.
**/
public class ResellernotifyGetwatchdetailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountEmailAddresses")
    public String[] serviceAccountEmailAddresses;
    public ResellernotifyGetwatchdetailsResponse withServiceAccountEmailAddresses(String[] serviceAccountEmailAddresses) {
        this.serviceAccountEmailAddresses = serviceAccountEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicName")
    public String topicName;
    public ResellernotifyGetwatchdetailsResponse withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}