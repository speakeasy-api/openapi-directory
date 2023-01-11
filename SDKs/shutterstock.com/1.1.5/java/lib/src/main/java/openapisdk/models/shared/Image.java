package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * Information about an image
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_date")
    public LocalDate addedDate;
    public Image withAddedDate(LocalDate addedDate) {
        this.addedDate = addedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affiliate_url")
    public String affiliateUrl;
    public Image withAffiliateUrl(String affiliateUrl) {
        this.affiliateUrl = affiliateUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspect")
    public Double aspect;
    public Image withAspect(Double aspect) {
        this.aspect = aspect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public ImageAssets assets;
    public Image withAssets(ImageAssets assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public Image withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("contributor")
    public Contributor contributor;
    public Image withContributor(Contributor contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Image withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_model_release")
    public Boolean hasModelRelease;
    public Image withHasModelRelease(Boolean hasModelRelease) {
        this.hasModelRelease = hasModelRelease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_property_release")
    public Boolean hasPropertyRelease;
    public Image withHasPropertyRelease(Boolean hasPropertyRelease) {
        this.hasPropertyRelease = hasPropertyRelease;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Image withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_type")
    public String imageType;
    public Image withImageType(String imageType) {
        this.imageType = imageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_adult")
    public Boolean isAdult;
    public Image withIsAdult(Boolean isAdult) {
        this.isAdult = isAdult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_editorial")
    public Boolean isEditorial;
    public Image withIsEditorial(Boolean isEditorial) {
        this.isEditorial = isEditorial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_illustration")
    public Boolean isIllustration;
    public Image withIsIllustration(Boolean isIllustration) {
        this.isIllustration = isIllustration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public Image withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonProperty("media_type")
    public String mediaType;
    public Image withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_releases")
    public ModelRelease[] modelReleases;
    public Image withModelReleases(ModelRelease[] modelReleases) {
        this.modelReleases = modelReleases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public Model[] models;
    public Image withModels(Model[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releases")
    public String[] releases;
    public Image withReleases(String[] releases) {
        this.releases = releases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
}