package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1InputConfig
 * The configuration of input data, including data type, location, etc.
**/
public class GoogleCloudDatalabelingV1beta1InputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum annotationType;
    public GoogleCloudDatalabelingV1beta1InputConfig withAnnotationType(GoogleCloudDatalabelingV1beta1InputConfigAnnotationTypeEnum annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigquerySource")
    public GoogleCloudDatalabelingV1beta1BigQuerySource bigquerySource;
    public GoogleCloudDatalabelingV1beta1InputConfig withBigquerySource(GoogleCloudDatalabelingV1beta1BigQuerySource bigquerySource) {
        this.bigquerySource = bigquerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classificationMetadata")
    public GoogleCloudDatalabelingV1beta1ClassificationMetadata classificationMetadata;
    public GoogleCloudDatalabelingV1beta1InputConfig withClassificationMetadata(GoogleCloudDatalabelingV1beta1ClassificationMetadata classificationMetadata) {
        this.classificationMetadata = classificationMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum dataType;
    public GoogleCloudDatalabelingV1beta1InputConfig withDataType(GoogleCloudDatalabelingV1beta1InputConfigDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudDatalabelingV1beta1GcsSource gcsSource;
    public GoogleCloudDatalabelingV1beta1InputConfig withGcsSource(GoogleCloudDatalabelingV1beta1GcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textMetadata")
    public GoogleCloudDatalabelingV1beta1TextMetadata textMetadata;
    public GoogleCloudDatalabelingV1beta1InputConfig withTextMetadata(GoogleCloudDatalabelingV1beta1TextMetadata textMetadata) {
        this.textMetadata = textMetadata;
        return this;
    }
}