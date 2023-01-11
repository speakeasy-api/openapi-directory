package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Images200ApplicationJsonImageResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Images200ApplicationJsonImageResultsImage image;
    public Images200ApplicationJsonImageResults withImage(Images200ApplicationJsonImageResultsImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Images200ApplicationJsonImageResultsLink link;
    public Images200ApplicationJsonImageResults withLink(Images200ApplicationJsonImageResultsLink link) {
        this.link = link;
        return this;
    }
}