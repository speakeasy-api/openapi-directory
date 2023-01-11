package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MetadataDto {
    @JsonProperty("inPos")
    public Boolean inPos;
    public MetadataDto withInPos(Boolean inPos) {
        this.inPos = inPos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public SourceDto source;
    public MetadataDto withSource(SourceDto source) {
        this.source = source;
        return this;
    }
}