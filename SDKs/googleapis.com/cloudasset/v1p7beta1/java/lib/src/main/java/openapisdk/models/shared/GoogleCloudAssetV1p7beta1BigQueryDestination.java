package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p7beta1BigQueryDestination
 * A BigQuery destination for exporting assets to.
**/
public class GoogleCloudAssetV1p7beta1BigQueryDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public String dataset;
    public GoogleCloudAssetV1p7beta1BigQueryDestination withDataset(String dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force")
    public Boolean force;
    public GoogleCloudAssetV1p7beta1BigQueryDestination withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionSpec")
    public GoogleCloudAssetV1p7beta1PartitionSpec partitionSpec;
    public GoogleCloudAssetV1p7beta1BigQueryDestination withPartitionSpec(GoogleCloudAssetV1p7beta1PartitionSpec partitionSpec) {
        this.partitionSpec = partitionSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("separateTablesPerAssetType")
    public Boolean separateTablesPerAssetType;
    public GoogleCloudAssetV1p7beta1BigQueryDestination withSeparateTablesPerAssetType(Boolean separateTablesPerAssetType) {
        this.separateTablesPerAssetType = separateTablesPerAssetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public GoogleCloudAssetV1p7beta1BigQueryDestination withTable(String table) {
        this.table = table;
        return this;
    }
}