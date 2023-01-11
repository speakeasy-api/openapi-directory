package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupSnippet
 * A group snippet.
**/
public class GroupSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedAt")
    public String publishedAt;
    public GroupSnippet withPublishedAt(String publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GroupSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}