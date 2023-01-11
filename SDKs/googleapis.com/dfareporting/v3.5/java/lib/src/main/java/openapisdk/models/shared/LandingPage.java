package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandingPage
 * Contains information about where a user's browser is taken after the user clicks an ad.
**/
public class LandingPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public LandingPage withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public LandingPage withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deepLinks")
    public DeepLink[] deepLinks;
    public LandingPage withDeepLinks(DeepLink[] deepLinks) {
        this.deepLinks = deepLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LandingPage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LandingPage withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LandingPage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public LandingPage withUrl(String url) {
        this.url = url;
        return this;
    }
}