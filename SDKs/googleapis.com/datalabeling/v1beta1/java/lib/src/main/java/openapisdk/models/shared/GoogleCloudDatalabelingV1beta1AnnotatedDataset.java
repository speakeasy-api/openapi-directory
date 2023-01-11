package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotatedDataset
 * AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
**/
public class GoogleCloudDatalabelingV1beta1AnnotatedDataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSource")
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum annotationSource;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withAnnotationSource(GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum annotationSource) {
        this.annotationSource = annotationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum annotationType;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withAnnotationType(GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockingResources")
    public String[] blockingResources;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withBlockingResources(String[] blockingResources) {
        this.blockingResources = blockingResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completedExampleCount")
    public String completedExampleCount;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withCompletedExampleCount(String completedExampleCount) {
        this.completedExampleCount = completedExampleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exampleCount")
    public String exampleCount;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withExampleCount(String exampleCount) {
        this.exampleCount = exampleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelStats")
    public GoogleCloudDatalabelingV1beta1LabelStats labelStats;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withLabelStats(GoogleCloudDatalabelingV1beta1LabelStats labelStats) {
        this.labelStats = labelStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata metadata;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withMetadata(GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1AnnotatedDataset withName(String name) {
        this.name = name;
        return this;
    }
}