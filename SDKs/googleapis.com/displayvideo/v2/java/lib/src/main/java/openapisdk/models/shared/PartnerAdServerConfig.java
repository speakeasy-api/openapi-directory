package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerAdServerConfig
 * Ad server related settings of a partner.
**/
public class PartnerAdServerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementConfig")
    public MeasurementConfig measurementConfig;
    public PartnerAdServerConfig withMeasurementConfig(MeasurementConfig measurementConfig) {
        this.measurementConfig = measurementConfig;
        return this;
    }
}