package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleSourceConfig
 * Oracle data source configuration
**/
public class OracleSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropLargeObjects")
    public java.util.Map<String, Object> dropLargeObjects;
    public OracleSourceConfig withDropLargeObjects(java.util.Map<String, Object> dropLargeObjects) {
        this.dropLargeObjects = dropLargeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeObjects")
    public OracleRdbms excludeObjects;
    public OracleSourceConfig withExcludeObjects(OracleRdbms excludeObjects) {
        this.excludeObjects = excludeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeObjects")
    public OracleRdbms includeObjects;
    public OracleSourceConfig withIncludeObjects(OracleRdbms includeObjects) {
        this.includeObjects = includeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentCdcTasks")
    public Integer maxConcurrentCdcTasks;
    public OracleSourceConfig withMaxConcurrentCdcTasks(Integer maxConcurrentCdcTasks) {
        this.maxConcurrentCdcTasks = maxConcurrentCdcTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamLargeObjects")
    public java.util.Map<String, Object> streamLargeObjects;
    public OracleSourceConfig withStreamLargeObjects(java.util.Map<String, Object> streamLargeObjects) {
        this.streamLargeObjects = streamLargeObjects;
        return this;
    }
}