package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MiscKeyword
 * A person's miscellaneous keyword.
**/
public class MiscKeyword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedType")
    public String formattedType;
    public MiscKeyword withFormattedType(String formattedType) {
        this.formattedType = formattedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public MiscKeyword withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public MiscKeywordTypeEnum type;
    public MiscKeyword withType(MiscKeywordTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public MiscKeyword withValue(String value) {
        this.value = value;
        return this;
    }
}