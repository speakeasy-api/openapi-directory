package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1BigQuerySource
 * BigQuery source import data from.
**/
public class GoogleCloudRecommendationengineV1beta1BigQuerySource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSchema")
    public String dataSchema;
    public GoogleCloudRecommendationengineV1beta1BigQuerySource withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public GoogleCloudRecommendationengineV1beta1BigQuerySource withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsStagingDir")
    public String gcsStagingDir;
    public GoogleCloudRecommendationengineV1beta1BigQuerySource withGcsStagingDir(String gcsStagingDir) {
        this.gcsStagingDir = gcsStagingDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudRecommendationengineV1beta1BigQuerySource withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public GoogleCloudRecommendationengineV1beta1BigQuerySource withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
}