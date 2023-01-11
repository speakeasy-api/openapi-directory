package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1WebDetectionWebPage
 * Metadata for web pages.
**/
public class GoogleCloudVisionV1p1beta1WebDetectionWebPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullMatchingImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebImage[] fullMatchingImages;
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage withFullMatchingImages(GoogleCloudVisionV1p1beta1WebDetectionWebImage[] fullMatchingImages) {
        this.fullMatchingImages = fullMatchingImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageTitle")
    public String pageTitle;
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage withPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partialMatchingImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebImage[] partialMatchingImages;
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage withPartialMatchingImages(GoogleCloudVisionV1p1beta1WebDetectionWebImage[] partialMatchingImages) {
        this.partialMatchingImages = partialMatchingImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage withUrl(String url) {
        this.url = url;
        return this;
    }
}