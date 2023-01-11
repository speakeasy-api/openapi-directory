package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * Information about a video
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_date")
    public LocalDate addedDate;
    public Video withAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliate_url")
    public String affiliateUrl;
    public Video withAffiliateUrl(String affiliateUrl) {
        this.affiliateUrl = affiliateUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect")
    public Double aspect;
    public Video withAspect(Double aspect) {
        this.aspect = aspect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect_ratio")
    public String aspectRatio;
    public Video withAspectRatio(String aspectRatio) {
        this.aspectRatio = aspectRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public VideoAssets assets;
    public Video withAssets(VideoAssets assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public Video withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("contributor")
    public Contributor contributor;
    public Video withContributor(Contributor contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Video withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Double duration;
    public Video withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_model_release")
    public Boolean hasModelRelease;
    public Video withHasModelRelease(Boolean hasModelRelease) {
        this.hasModelRelease = hasModelRelease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_property_release")
    public Boolean hasPropertyRelease;
    public Video withHasPropertyRelease(Boolean hasPropertyRelease) {
        this.hasPropertyRelease = hasPropertyRelease;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Video withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_adult")
    public Boolean isAdult;
    public Video withIsAdult(Boolean isAdult) {
        this.isAdult = isAdult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_editorial")
    public Boolean isEditorial;
    public Video withIsEditorial(Boolean isEditorial) {
        this.isEditorial = isEditorial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public Video withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonProperty("media_type")
    public String mediaType;
    public Video withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public Model[] models;
    public Video withModels(Model[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Video withUrl(String url) {
        this.url = url;
        return this;
    }
}