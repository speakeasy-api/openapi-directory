package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1WebDetection
 * Relevant information for the image from the Internet.
**/
public class GoogleCloudVisionV1p1beta1WebDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestGuessLabels")
    public GoogleCloudVisionV1p1beta1WebDetectionWebLabel[] bestGuessLabels;
    public GoogleCloudVisionV1p1beta1WebDetection withBestGuessLabels(GoogleCloudVisionV1p1beta1WebDetectionWebLabel[] bestGuessLabels) {
        this.bestGuessLabels = bestGuessLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullMatchingImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebImage[] fullMatchingImages;
    public GoogleCloudVisionV1p1beta1WebDetection withFullMatchingImages(GoogleCloudVisionV1p1beta1WebDetectionWebImage[] fullMatchingImages) {
        this.fullMatchingImages = fullMatchingImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagesWithMatchingImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebPage[] pagesWithMatchingImages;
    public GoogleCloudVisionV1p1beta1WebDetection withPagesWithMatchingImages(GoogleCloudVisionV1p1beta1WebDetectionWebPage[] pagesWithMatchingImages) {
        this.pagesWithMatchingImages = pagesWithMatchingImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partialMatchingImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebImage[] partialMatchingImages;
    public GoogleCloudVisionV1p1beta1WebDetection withPartialMatchingImages(GoogleCloudVisionV1p1beta1WebDetectionWebImage[] partialMatchingImages) {
        this.partialMatchingImages = partialMatchingImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visuallySimilarImages")
    public GoogleCloudVisionV1p1beta1WebDetectionWebImage[] visuallySimilarImages;
    public GoogleCloudVisionV1p1beta1WebDetection withVisuallySimilarImages(GoogleCloudVisionV1p1beta1WebDetectionWebImage[] visuallySimilarImages) {
        this.visuallySimilarImages = visuallySimilarImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webEntities")
    public GoogleCloudVisionV1p1beta1WebDetectionWebEntity[] webEntities;
    public GoogleCloudVisionV1p1beta1WebDetection withWebEntities(GoogleCloudVisionV1p1beta1WebDetectionWebEntity[] webEntities) {
        this.webEntities = webEntities;
        return this;
    }
}