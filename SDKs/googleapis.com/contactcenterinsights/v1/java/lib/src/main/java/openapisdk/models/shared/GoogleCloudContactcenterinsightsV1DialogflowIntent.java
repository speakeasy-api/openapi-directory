package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudContactcenterinsightsV1DialogflowIntent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1DialogflowIntent withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}