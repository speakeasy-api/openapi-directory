package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsivityList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public LinksMeta links;
    public ResponsivityList withLinks(LinksMeta links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsivity")
    public Responsivity[] responsivity;
    public ResponsivityList withResponsivity(Responsivity[] responsivity) {
        this.responsivity = responsivity;
        return this;
    }
}