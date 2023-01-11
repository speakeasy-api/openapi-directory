package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatusDetails
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
**/
public class StatusDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("causes")
    public StatusCause[] causes;
    public StatusDetails withCauses(StatusCause[] causes) {
        this.causes = causes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public StatusDetails withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public StatusDetails withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public StatusDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryAfterSeconds")
    public Integer retryAfterSeconds;
    public StatusDetails withRetryAfterSeconds(Integer retryAfterSeconds) {
        this.retryAfterSeconds = retryAfterSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public StatusDetails withUid(String uid) {
        this.uid = uid;
        return this;
    }
}