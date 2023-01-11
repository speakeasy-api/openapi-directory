package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidRuntimeConfiguration
 * Android configuration that can be selected at the time a test is run.
**/
public class AndroidRuntimeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locales")
    public Locale[] locales;
    public AndroidRuntimeConfiguration withLocales(Locale[] locales) {
        this.locales = locales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientations")
    public Orientation[] orientations;
    public AndroidRuntimeConfiguration withOrientations(Orientation[] orientations) {
        this.orientations = orientations;
        return this;
    }
}