package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external")
    public Boolean external;
    public SourceDto withExternal(Boolean external) {
        this.external = external;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SourceDto withName(String name) {
        this.name = name;
        return this;
    }
}