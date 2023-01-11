package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceV1DialingPermissionsDialingPermissionsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialing_permissions_inheritance")
    public Boolean dialingPermissionsInheritance;
    public VoiceV1DialingPermissionsDialingPermissionsSettings withDialingPermissionsInheritance(Boolean dialingPermissionsInheritance) {
        this.dialingPermissionsInheritance = dialingPermissionsInheritance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VoiceV1DialingPermissionsDialingPermissionsSettings withUrl(String url) {
        this.url = url;
        return this;
    }
}