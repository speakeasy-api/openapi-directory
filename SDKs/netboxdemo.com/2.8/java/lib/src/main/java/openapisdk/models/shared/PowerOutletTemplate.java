package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerOutletTemplate {
    @JsonProperty("device_type")
    public NestedDeviceType deviceType;
    public PowerOutletTemplate withDeviceType(NestedDeviceType deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed_leg")
    public PowerOutletTemplateFeedLeg feedLeg;
    public PowerOutletTemplate withFeedLeg(PowerOutletTemplateFeedLeg feedLeg) {
        this.feedLeg = feedLeg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerOutletTemplate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerOutletTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("power_port")
    public NestedPowerPortTemplate powerPort;
    public PowerOutletTemplate withPowerPort(NestedPowerPortTemplate powerPort) {
        this.powerPort = powerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PowerOutletTemplateType type;
    public PowerOutletTemplate withType(PowerOutletTemplateType type) {
        this.type = type;
        return this;
    }
}