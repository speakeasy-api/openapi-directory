package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggingConfig
 * The runtime logging config of the job.
**/
public class LoggingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverLogLevels")
    public java.util.Map<String, LoggingConfigDriverLogLevelsEnum> driverLogLevels;
    public LoggingConfig withDriverLogLevels(java.util.Map<String, LoggingConfigDriverLogLevelsEnum> driverLogLevels) {
        this.driverLogLevels = driverLogLevels;
        return this;
    }
}