package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TelemetryConfig
 * Telemetry Configuration for the Dataproc Metastore service.
**/
public class TelemetryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logFormat")
    public TelemetryConfigLogFormatEnum logFormat;
    public TelemetryConfig withLogFormat(TelemetryConfigLogFormatEnum logFormat) {
        this.logFormat = logFormat;
        return this;
    }
}