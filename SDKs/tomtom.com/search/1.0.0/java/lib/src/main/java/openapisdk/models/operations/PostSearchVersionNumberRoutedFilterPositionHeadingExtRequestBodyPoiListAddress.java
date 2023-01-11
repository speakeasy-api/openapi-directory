package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeformAddress")
    public String freeformAddress;
    public PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress withFreeformAddress(String freeformAddress) {
        this.freeformAddress = freeformAddress;
        return this;
    }
}