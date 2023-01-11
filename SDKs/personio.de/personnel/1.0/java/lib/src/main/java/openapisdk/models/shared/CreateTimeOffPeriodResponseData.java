package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTimeOffPeriodResponseData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Object attributes;
    public CreateTimeOffPeriodResponseData withAttributes(Object attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateTimeOffPeriodResponseDataTypeEnum type;
    public CreateTimeOffPeriodResponseData withType(CreateTimeOffPeriodResponseDataTypeEnum type) {
        this.type = type;
        return this;
    }
}