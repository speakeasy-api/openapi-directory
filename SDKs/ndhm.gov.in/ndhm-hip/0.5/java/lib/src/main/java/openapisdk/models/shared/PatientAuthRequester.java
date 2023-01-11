package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PatientAuthRequester
 * identification of requester
**/
public class PatientAuthRequester {
    @JsonProperty("id")
    public String id;
    public PatientAuthRequester withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public PatientAuthRequesterTypeEnum type;
    public PatientAuthRequester withType(PatientAuthRequesterTypeEnum type) {
        this.type = type;
        return this;
    }
}