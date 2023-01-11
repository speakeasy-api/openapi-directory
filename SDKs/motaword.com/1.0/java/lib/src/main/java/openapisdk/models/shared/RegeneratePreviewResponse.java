package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegeneratePreviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Href link;
    public RegeneratePreviewResponse withLink(Href link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public RegeneratePreviewResponse withSource(String source) {
        this.source = source;
        return this;
    }
}