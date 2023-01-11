package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BiographyInput
 * A person's short biography.
**/
public class BiographyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public BiographyContentTypeEnum contentType;
    public BiographyInput withContentType(BiographyContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public BiographyInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public BiographyInput withValue(String value) {
        this.value = value;
        return this;
    }
}