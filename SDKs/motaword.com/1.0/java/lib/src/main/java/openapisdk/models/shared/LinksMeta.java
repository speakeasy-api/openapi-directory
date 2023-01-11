package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LinksMeta {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Href self;
    public LinksMeta withSelf(Href self) {
        this.self = self;
        return this;
    }
}