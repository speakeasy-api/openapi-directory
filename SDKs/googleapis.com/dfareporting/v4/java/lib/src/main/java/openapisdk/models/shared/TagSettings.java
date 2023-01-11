package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagSettings
 * Dynamic and Image Tag Settings.
**/
public class TagSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicTagEnabled")
    public Boolean dynamicTagEnabled;
    public TagSettings withDynamicTagEnabled(Boolean dynamicTagEnabled) {
        this.dynamicTagEnabled = dynamicTagEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTagEnabled")
    public Boolean imageTagEnabled;
    public TagSettings withImageTagEnabled(Boolean imageTagEnabled) {
        this.imageTagEnabled = imageTagEnabled;
        return this;
    }
}