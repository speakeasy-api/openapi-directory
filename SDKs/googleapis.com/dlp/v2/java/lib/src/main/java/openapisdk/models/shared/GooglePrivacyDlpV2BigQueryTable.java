package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2BigQueryTable
 * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
**/
public class GooglePrivacyDlpV2BigQueryTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public GooglePrivacyDlpV2BigQueryTable withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GooglePrivacyDlpV2BigQueryTable withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public GooglePrivacyDlpV2BigQueryTable withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
}