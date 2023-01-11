package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p7beta1PartitionSpec
 * Specifications of BigQuery partitioned table as export destination.
**/
public class GoogleCloudAssetV1p7beta1PartitionSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partitionKey")
    public GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum partitionKey;
    public GoogleCloudAssetV1p7beta1PartitionSpec withPartitionKey(GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
}