package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Link {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@Href")
    public String atHref;
    public Link withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@Rel")
    public String atRel;
    public Link withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
}