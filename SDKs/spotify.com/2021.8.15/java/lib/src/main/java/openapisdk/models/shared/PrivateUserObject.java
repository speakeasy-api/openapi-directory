package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateUserObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject - Find more info on the official Spotify Web API Reference
**/
public class PrivateUserObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PrivateUserObject withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public PrivateUserObject withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PrivateUserObject withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public ExplicitContentSettingsObject explicitContent;
    public PrivateUserObject withExplicitContent(ExplicitContentSettingsObject explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public PrivateUserObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public FollowersObject followers;
    public PrivateUserObject withFollowers(FollowersObject followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PrivateUserObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PrivateUserObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public PrivateUserObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public String product;
    public PrivateUserObject withProduct(String product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PrivateUserObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PrivateUserObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}