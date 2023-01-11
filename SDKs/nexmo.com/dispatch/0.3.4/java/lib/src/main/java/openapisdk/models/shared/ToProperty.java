package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ToProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ToProperty withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public ToProperty withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public ToPropertyTypeEnum type;
    public ToProperty withType(ToPropertyTypeEnum type) {
        this.type = type;
        return this;
    }
}