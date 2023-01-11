package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShowObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
**/
public class ShowObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public ShowObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public CopyrightObject[] copyrights;
    public ShowObject withCopyrights(CopyrightObject[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ShowObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public ShowObjectEpisodes episodes;
    public ShowObject withEpisodes(ShowObjectEpisodes episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit")
    public Boolean explicit;
    public ShowObject withExplicit(Boolean explicit) {
        this.explicit = explicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public ShowObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public ShowObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_description")
    public String htmlDescription;
    public ShowObject withHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ShowObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public ShowObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_externally_hosted")
    public Boolean isExternallyHosted;
    public ShowObject withIsExternallyHosted(Boolean isExternallyHosted) {
        this.isExternallyHosted = isExternallyHosted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public ShowObject withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_type")
    public String mediaType;
    public ShowObject withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ShowObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public ShowObject withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ShowObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ShowObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}