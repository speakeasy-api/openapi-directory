package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public FileProperty withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FileProperty withUrl(String url) {
        this.url = url;
        return this;
    }
}