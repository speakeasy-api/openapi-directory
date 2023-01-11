package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaBigQuerySource
 * BigQuery source import data from.
**/
public class GoogleCloudDiscoveryengineV1betaBigQuerySource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSchema")
    public String dataSchema;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsStagingDir")
    public String gcsStagingDir;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withGcsStagingDir(String gcsStagingDir) {
        this.gcsStagingDir = gcsStagingDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionDate")
    public GoogleTypeDate partitionDate;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withPartitionDate(GoogleTypeDate partitionDate) {
        this.partitionDate = partitionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public GoogleCloudDiscoveryengineV1betaBigQuerySource withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
}