package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}