package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperationalDisconnectProblem
 * You have been disconnected for operational reasons.
**/
public class OperationalDisconnectProblem {
    @JsonProperty("detail")
    public String detail;
    public OperationalDisconnectProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disconnect_type")
    public OperationalDisconnectProblemDisconnectTypeEnum disconnectType;
    public OperationalDisconnectProblem withDisconnectType(OperationalDisconnectProblemDisconnectTypeEnum disconnectType) {
        this.disconnectType = disconnectType;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public OperationalDisconnectProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public OperationalDisconnectProblem withType(String type) {
        this.type = type;
        return this;
    }
}