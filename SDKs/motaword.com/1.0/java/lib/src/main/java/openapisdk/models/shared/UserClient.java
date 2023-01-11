package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserClient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate")
    public UserClientCorporate corporate;
    public UserClient withCorporate(UserClientCorporate corporate) {
        this.corporate = corporate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nps")
    public Float nps;
    public UserClient withNps(Float nps) {
        this.nps = nps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public java.util.Map<String, Long> subjects;
    public UserClient withSubjects(java.util.Map<String, Long> subjects) {
        this.subjects = subjects;
        return this;
    }
}