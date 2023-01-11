package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosRuntimeConfiguration
 * iOS configuration that can be selected at the time a test is run.
**/
public class IosRuntimeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locales")
    public Locale[] locales;
    public IosRuntimeConfiguration withLocales(Locale[] locales) {
        this.locales = locales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientations")
    public Orientation[] orientations;
    public IosRuntimeConfiguration withOrientations(Orientation[] orientations) {
        this.orientations = orientations;
        return this;
    }
}