package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CommentFeed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public CommentFeed withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CommentFeed withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Comment[] items;
    public CommentFeed withItems(Comment[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CommentFeed withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextLink")
    public String nextLink;
    public CommentFeed withNextLink(String nextLink) {
        this.nextLink = nextLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CommentFeed withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CommentFeed withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public CommentFeed withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}