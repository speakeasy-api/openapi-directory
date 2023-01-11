package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ImportDataRequest
 * Request message for ImportData API.
**/
public class GoogleCloudDatalabelingV1beta1ImportDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudDatalabelingV1beta1InputConfig inputConfig;
    public GoogleCloudDatalabelingV1beta1ImportDataRequest withInputConfig(GoogleCloudDatalabelingV1beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmailAddress")
    public String userEmailAddress;
    public GoogleCloudDatalabelingV1beta1ImportDataRequest withUserEmailAddress(String userEmailAddress) {
        this.userEmailAddress = userEmailAddress;
        return this;
    }
}