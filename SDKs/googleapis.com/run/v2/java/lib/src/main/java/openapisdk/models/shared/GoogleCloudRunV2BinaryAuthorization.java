package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2BinaryAuthorization
 * Settings for Binary Authorization feature.
**/
public class GoogleCloudRunV2BinaryAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakglassJustification")
    public String breakglassJustification;
    public GoogleCloudRunV2BinaryAuthorization withBreakglassJustification(String breakglassJustification) {
        this.breakglassJustification = breakglassJustification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDefault")
    public Boolean useDefault;
    public GoogleCloudRunV2BinaryAuthorization withUseDefault(Boolean useDefault) {
        this.useDefault = useDefault;
        return this;
    }
}