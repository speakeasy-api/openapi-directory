package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicUserObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject - Find more info on the official Spotify Web API Reference
**/
public class PublicUserObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public PublicUserObject withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public PublicUserObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public FollowersObject followers;
    public PublicUserObject withFollowers(FollowersObject followers) {
        this.followers = followers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public PublicUserObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PublicUserObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public PublicUserObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PublicUserObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PublicUserObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}