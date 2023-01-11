package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogConfig
 * Specifies what kind of log the caller must write
**/
public class LogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudAudit")
    public CloudAuditOptions cloudAudit;
    public LogConfig withCloudAudit(CloudAuditOptions cloudAudit) {
        this.cloudAudit = cloudAudit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counter")
    public CounterOptions counter;
    public LogConfig withCounter(CounterOptions counter) {
        this.counter = counter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataAccess")
    public DataAccessOptions dataAccess;
    public LogConfig withDataAccess(DataAccessOptions dataAccess) {
        this.dataAccess = dataAccess;
        return this;
    }
}