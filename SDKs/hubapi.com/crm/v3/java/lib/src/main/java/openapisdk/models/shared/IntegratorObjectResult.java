package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IntegratorObjectResult {
    @JsonProperty("actions")
    public Object[] actions;
    public IntegratorObjectResult withActions(Object[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public IntegratorObjectResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkUrl")
    public String linkUrl;
    public IntegratorObjectResult withLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IntegratorObjectResult withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("tokens")
    public ObjectToken[] tokens;
    public IntegratorObjectResult withTokens(ObjectToken[] tokens) {
        this.tokens = tokens;
        return this;
    }
}