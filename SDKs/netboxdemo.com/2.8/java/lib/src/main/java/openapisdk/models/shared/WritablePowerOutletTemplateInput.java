package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePowerOutletTemplateInput {
    @JsonProperty("device_type")
    public Long deviceType;
    public WritablePowerOutletTemplateInput withDeviceType(Long deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed_leg")
    public WritablePowerOutletTemplateFeedLegEnum feedLeg;
    public WritablePowerOutletTemplateInput withFeedLeg(WritablePowerOutletTemplateFeedLegEnum feedLeg) {
        this.feedLeg = feedLeg;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritablePowerOutletTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power_port")
    public Long powerPort;
    public WritablePowerOutletTemplateInput withPowerPort(Long powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WritablePowerOutletTemplateTypeEnum type;
    public WritablePowerOutletTemplateInput withType(WritablePowerOutletTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
}