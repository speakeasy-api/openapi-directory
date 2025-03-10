/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDiscoveryengineV1alphaBigQuerySource - BigQuery source import data from.
 */
public class GoogleCloudDiscoveryengineV1alphaBigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms the defined Schema of the data store. This can only be used by the GENERIC Data Store vertical.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSchema")
    public String dataSchema;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    
    /**
     * Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    
    /**
     * Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsStagingDir")
    public String gcsStagingDir;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withGcsStagingDir(String gcsStagingDir) {
        this.gcsStagingDir = gcsStagingDir;
        return this;
    }
    
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionDate")
    public GoogleTypeDate partitionDate;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withPartitionDate(GoogleTypeDate partitionDate) {
        this.partitionDate = partitionDate;
        return this;
    }
    
    /**
     * The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    /**
     * Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;

    public GoogleCloudDiscoveryengineV1alphaBigQuerySource withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    
    public GoogleCloudDiscoveryengineV1alphaBigQuerySource(){}
}
