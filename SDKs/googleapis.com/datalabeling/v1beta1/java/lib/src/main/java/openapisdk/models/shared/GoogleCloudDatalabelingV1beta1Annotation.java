package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Annotation
 * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
**/
public class GoogleCloudDatalabelingV1beta1Annotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationMetadata")
    public GoogleCloudDatalabelingV1beta1AnnotationMetadata annotationMetadata;
    public GoogleCloudDatalabelingV1beta1Annotation withAnnotationMetadata(GoogleCloudDatalabelingV1beta1AnnotationMetadata annotationMetadata) {
        this.annotationMetadata = annotationMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSentiment")
    public GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum annotationSentiment;
    public GoogleCloudDatalabelingV1beta1Annotation withAnnotationSentiment(GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum annotationSentiment) {
        this.annotationSentiment = annotationSentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSource")
    public GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum annotationSource;
    public GoogleCloudDatalabelingV1beta1Annotation withAnnotationSource(GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum annotationSource) {
        this.annotationSource = annotationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationValue")
    public GoogleCloudDatalabelingV1beta1AnnotationValue annotationValue;
    public GoogleCloudDatalabelingV1beta1Annotation withAnnotationValue(GoogleCloudDatalabelingV1beta1AnnotationValue annotationValue) {
        this.annotationValue = annotationValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1Annotation withName(String name) {
        this.name = name;
        return this;
    }
}