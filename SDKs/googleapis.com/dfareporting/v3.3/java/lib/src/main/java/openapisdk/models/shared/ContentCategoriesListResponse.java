package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentCategoriesListResponse
 * Content Category List Response
**/
public class ContentCategoriesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentCategories")
    public ContentCategory[] contentCategories;
    public ContentCategoriesListResponse withContentCategories(ContentCategory[] contentCategories) {
        this.contentCategories = contentCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ContentCategoriesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ContentCategoriesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}