package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association")
    public GoogleCloudPrivatecatalogproducerV1beta1Association association;
    public GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest withAssociation(GoogleCloudPrivatecatalogproducerV1beta1Association association) {
        this.association = association;
        return this;
    }
}