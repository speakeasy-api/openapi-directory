package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationProductName")
    public String destinationProductName;
    public GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest withDestinationProductName(String destinationProductName) {
        this.destinationProductName = destinationProductName;
        return this;
    }
}