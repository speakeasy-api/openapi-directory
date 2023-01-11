package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1BigQueryExportInput
 * Configures how to deliver Findings to BigQuery Instance.
**/
public class GoogleCloudSecuritycenterV1BigQueryExportInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public String dataset;
    public GoogleCloudSecuritycenterV1BigQueryExportInput withDataset(String dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudSecuritycenterV1BigQueryExportInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public GoogleCloudSecuritycenterV1BigQueryExportInput withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1BigQueryExportInput withName(String name) {
        this.name = name;
        return this;
    }
}