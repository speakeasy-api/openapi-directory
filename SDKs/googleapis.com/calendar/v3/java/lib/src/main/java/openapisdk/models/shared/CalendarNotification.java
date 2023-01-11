package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalendarNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public CalendarNotification withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CalendarNotification withType(String type) {
        this.type = type;
        return this;
    }
}