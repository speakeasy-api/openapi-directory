package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_rating")
    public String[] contentRating;
    public EditVideoRequestBody withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EditVideoRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public EditVideoRequestBodyEmbed embed;
    public EditVideoRequestBody withEmbed(EditVideoRequestBodyEmbed embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public EditVideoRequestBodyLicenseEnum license;
    public EditVideoRequestBody withLicense(EditVideoRequestBodyLicenseEnum license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public EditVideoRequestBody withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EditVideoRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EditVideoRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public EditVideoRequestBodyPrivacy privacy;
    public EditVideoRequestBody withPrivacy(EditVideoRequestBodyPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratings")
    public EditVideoRequestBodyRatings ratings;
    public EditVideoRequestBody withRatings(EditVideoRequestBodyRatings ratings) {
        this.ratings = ratings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review_page")
    public EditVideoRequestBodyReviewPage reviewPage;
    public EditVideoRequestBody withReviewPage(EditVideoRequestBodyReviewPage reviewPage) {
        this.reviewPage = reviewPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spatial")
    public EditVideoRequestBodySpatial spatial;
    public EditVideoRequestBody withSpatial(EditVideoRequestBodySpatial spatial) {
        this.spatial = spatial;
        return this;
    }
}