package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotationSpecSet
 * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
**/
public class GoogleCloudDatalabelingV1beta1AnnotationSpecSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecs")
    public GoogleCloudDatalabelingV1beta1AnnotationSpec[] annotationSpecs;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet withAnnotationSpecs(GoogleCloudDatalabelingV1beta1AnnotationSpec[] annotationSpecs) {
        this.annotationSpecs = annotationSpecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockingResources")
    public String[] blockingResources;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet withBlockingResources(String[] blockingResources) {
        this.blockingResources = blockingResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSet withName(String name) {
        this.name = name;
        return this;
    }
}