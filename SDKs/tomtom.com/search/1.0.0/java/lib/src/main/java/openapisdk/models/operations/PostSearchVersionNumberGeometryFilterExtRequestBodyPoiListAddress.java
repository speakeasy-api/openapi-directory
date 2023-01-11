package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeformAddress")
    public String freeformAddress;
    public PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress withFreeformAddress(String freeformAddress) {
        this.freeformAddress = freeformAddress;
        return this;
    }
}