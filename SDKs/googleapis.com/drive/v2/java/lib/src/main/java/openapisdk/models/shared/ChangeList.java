package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeList
 * A list of changes for a user.
**/
public class ChangeList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ChangeList withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Change[] items;
    public ChangeList withItems(Change[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChangeList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largestChangeId")
    public String largestChangeId;
    public ChangeList withLargestChangeId(String largestChangeId) {
        this.largestChangeId = largestChangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newStartPageToken")
    public String newStartPageToken;
    public ChangeList withNewStartPageToken(String newStartPageToken) {
        this.newStartPageToken = newStartPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public ChangeList withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ChangeList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ChangeList withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}