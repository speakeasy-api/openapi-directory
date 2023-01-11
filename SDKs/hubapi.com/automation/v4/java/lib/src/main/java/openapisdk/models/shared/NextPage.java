package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NextPage {
    @JsonProperty("after")
    public String after;
    public NextPage withAfter(String after) {
        this.after = after;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public NextPage withLink(String link) {
        this.link = link;
        return this;
    }
}