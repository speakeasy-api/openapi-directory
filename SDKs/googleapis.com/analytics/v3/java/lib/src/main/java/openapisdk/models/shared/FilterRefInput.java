package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterRefInput
 * JSON template for a profile filter link.
**/
public class FilterRefInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public FilterRefInput withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FilterRefInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FilterRefInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
}