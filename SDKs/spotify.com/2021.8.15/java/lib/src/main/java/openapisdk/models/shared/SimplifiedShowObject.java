package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimplifiedShowObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedshowobject - Find more info on the official Spotify Web API Reference
**/
public class SimplifiedShowObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public SimplifiedShowObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public CopyrightObject[] copyrights;
    public SimplifiedShowObject withCopyrights(CopyrightObject[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SimplifiedShowObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit")
    public Boolean explicit;
    public SimplifiedShowObject withExplicit(Boolean explicit) {
        this.explicit = explicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public SimplifiedShowObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SimplifiedShowObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_description")
    public String htmlDescription;
    public SimplifiedShowObject withHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SimplifiedShowObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public SimplifiedShowObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_externally_hosted")
    public Boolean isExternallyHosted;
    public SimplifiedShowObject withIsExternallyHosted(Boolean isExternallyHosted) {
        this.isExternallyHosted = isExternallyHosted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public SimplifiedShowObject withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media_type")
    public String mediaType;
    public SimplifiedShowObject withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimplifiedShowObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public SimplifiedShowObject withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SimplifiedShowObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public SimplifiedShowObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}