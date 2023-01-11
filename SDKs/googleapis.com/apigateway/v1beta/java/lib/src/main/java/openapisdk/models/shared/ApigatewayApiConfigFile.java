package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApiConfigFile
 * A lightweight description of a file.
**/
public class ApigatewayApiConfigFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public ApigatewayApiConfigFile withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ApigatewayApiConfigFile withPath(String path) {
        this.path = path;
        return this;
    }
}