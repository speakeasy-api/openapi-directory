package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FromProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FromProperty withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public FromProperty withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public FromPropertyTypeEnum type;
    public FromProperty withType(FromPropertyTypeEnum type) {
        this.type = type;
        return this;
    }
}