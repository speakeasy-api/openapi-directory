package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RearPort {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cable")
    public NestedCable cable;
    public RearPort withCable(NestedCable cable) {
        this.cable = cable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RearPort withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public RearPort withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public RearPort withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RearPort withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positions")
    public Long positions;
    public RearPort withPositions(Long positions) {
        this.positions = positions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public RearPort withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public RearPortType type;
    public RearPort withType(RearPortType type) {
        this.type = type;
        return this;
    }
}