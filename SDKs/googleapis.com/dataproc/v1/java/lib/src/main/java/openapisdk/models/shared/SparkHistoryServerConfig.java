package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkHistoryServerConfig
 * Spark History Server configuration for the workload.
**/
public class SparkHistoryServerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocCluster")
    public String dataprocCluster;
    public SparkHistoryServerConfig withDataprocCluster(String dataprocCluster) {
        this.dataprocCluster = dataprocCluster;
        return this;
    }
}