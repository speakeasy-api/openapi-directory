package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppList
 * A list of third-party applications which the user has installed or given access to Google Drive.
**/
public class AppList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAppIds")
    public String[] defaultAppIds;
    public AppList withDefaultAppIds(String[] defaultAppIds) {
        this.defaultAppIds = defaultAppIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public AppList withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public App[] items;
    public AppList withItems(App[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AppList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public AppList withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}