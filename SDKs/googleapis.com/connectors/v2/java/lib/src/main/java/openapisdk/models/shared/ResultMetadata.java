package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultMetadata
 * Result Metadata message contains metadata about the result returned after executing an Action.
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
    @JsonProperty("name")
    public String name;
    public ResultMetadata withName(String name) {
        this.name = name;
        return this;
    }
}