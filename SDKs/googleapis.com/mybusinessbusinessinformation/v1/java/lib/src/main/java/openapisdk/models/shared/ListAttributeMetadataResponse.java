package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAttributeMetadataResponse
 * Response for AttributesService.ListAttributeMetadata.
**/
public class ListAttributeMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMetadata")
    public AttributeMetadata[] attributeMetadata;
    public ListAttributeMetadataResponse withAttributeMetadata(AttributeMetadata[] attributeMetadata) {
        this.attributeMetadata = attributeMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAttributeMetadataResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}