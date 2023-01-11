package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuxiliaryServicesConfig
 * Auxiliary services configuration for a Cluster.
**/
public class AuxiliaryServicesConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metastoreConfig")
    public MetastoreConfig metastoreConfig;
    public AuxiliaryServicesConfig withMetastoreConfig(MetastoreConfig metastoreConfig) {
        this.metastoreConfig = metastoreConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkHistoryServerConfig")
    public SparkHistoryServerConfig sparkHistoryServerConfig;
    public AuxiliaryServicesConfig withSparkHistoryServerConfig(SparkHistoryServerConfig sparkHistoryServerConfig) {
        this.sparkHistoryServerConfig = sparkHistoryServerConfig;
        return this;
    }
}