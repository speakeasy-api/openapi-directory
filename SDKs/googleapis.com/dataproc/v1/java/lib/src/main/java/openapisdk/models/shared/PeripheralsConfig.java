package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PeripheralsConfig
 * Auxiliary services configuration for a workload.
**/
public class PeripheralsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metastoreService")
    public String metastoreService;
    public PeripheralsConfig withMetastoreService(String metastoreService) {
        this.metastoreService = metastoreService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkHistoryServerConfig")
    public SparkHistoryServerConfig sparkHistoryServerConfig;
    public PeripheralsConfig withSparkHistoryServerConfig(SparkHistoryServerConfig sparkHistoryServerConfig) {
        this.sparkHistoryServerConfig = sparkHistoryServerConfig;
        return this;
    }
}