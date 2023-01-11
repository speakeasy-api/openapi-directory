package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartActivityIntent
 * A starting intent specified by an action, uri, and categories.
**/
public class StartActivityIntent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public StartActivityIntent withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public StartActivityIntent withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public StartActivityIntent withUri(String uri) {
        this.uri = uri;
        return this;
    }
}