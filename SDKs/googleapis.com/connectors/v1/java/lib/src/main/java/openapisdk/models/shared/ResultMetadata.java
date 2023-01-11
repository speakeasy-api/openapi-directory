package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultMetadata
 * Metadata of result field.
**/
public class ResultMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public ResultMetadataDataTypeEnum dataType;
    public ResultMetadata withDataType(ResultMetadataDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ResultMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public ResultMetadata withField(String field) {
        this.field = field;
        return this;
    }
}