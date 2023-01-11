package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Group
 * A group.
**/
public class Group {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public GroupContentDetails contentDetails;
    public Group withContentDetails(GroupContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public Group withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Group withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Group withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Group withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public GroupSnippet snippet;
    public Group withSnippet(GroupSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
}