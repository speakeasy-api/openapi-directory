package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination
 * A BigQuery Table Reference.
**/
public class GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public String dataset;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination withDataset(String dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination withTable(String table) {
        this.table = table;
        return this;
    }
}