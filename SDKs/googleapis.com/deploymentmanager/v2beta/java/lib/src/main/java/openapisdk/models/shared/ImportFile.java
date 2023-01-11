package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public ImportFile withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportFile withName(String name) {
        this.name = name;
        return this;
    }
}