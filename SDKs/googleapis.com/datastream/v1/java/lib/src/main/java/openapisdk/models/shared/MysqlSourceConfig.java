package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlSourceConfig
 * MySQL source configuration
**/
public class MysqlSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeObjects")
    public MysqlRdbms excludeObjects;
    public MysqlSourceConfig withExcludeObjects(MysqlRdbms excludeObjects) {
        this.excludeObjects = excludeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeObjects")
    public MysqlRdbms includeObjects;
    public MysqlSourceConfig withIncludeObjects(MysqlRdbms includeObjects) {
        this.includeObjects = includeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConcurrentCdcTasks")
    public Integer maxConcurrentCdcTasks;
    public MysqlSourceConfig withMaxConcurrentCdcTasks(Integer maxConcurrentCdcTasks) {
        this.maxConcurrentCdcTasks = maxConcurrentCdcTasks;
        return this;
    }
}