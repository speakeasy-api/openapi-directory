package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IapSettings
 * The IAP configurable settings.
**/
public class IapSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessSettings")
    public AccessSettings accessSettings;
    public IapSettings withAccessSettings(AccessSettings accessSettings) {
        this.accessSettings = accessSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationSettings")
    public ApplicationSettings applicationSettings;
    public IapSettings withApplicationSettings(ApplicationSettings applicationSettings) {
        this.applicationSettings = applicationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IapSettings withName(String name) {
        this.name = name;
        return this;
    }
}