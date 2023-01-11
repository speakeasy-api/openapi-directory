package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Pageviews {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blogId")
    public String blogId;
    public Pageviews withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public PageviewsCounts[] counts;
    public Pageviews withCounts(PageviewsCounts[] counts) {
        this.counts = counts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Pageviews withKind(String kind) {
        this.kind = kind;
        return this;
    }
}