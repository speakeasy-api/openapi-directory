package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Biography
 * A person's short biography.
**/
public class Biography {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public BiographyContentTypeEnum contentType;
    public Biography withContentType(BiographyContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Biography withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Biography withValue(String value) {
        this.value = value;
        return this;
    }
}