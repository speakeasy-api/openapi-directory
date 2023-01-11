package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAttributeMetadataResponse
 * Response message for Locations.ListAttributeMetadata.
**/
public class ListAttributeMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AttributeMetadata[] attributes;
    public ListAttributeMetadataResponse withAttributes(AttributeMetadata[] attributes) {
        this.attributes = attributes;
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