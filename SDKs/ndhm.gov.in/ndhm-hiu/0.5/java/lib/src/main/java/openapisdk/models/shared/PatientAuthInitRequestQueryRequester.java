package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PatientAuthInitRequestQueryRequester
 * identification of requester
**/
public class PatientAuthInitRequestQueryRequester {
    @JsonProperty("id")
    public String id;
    public PatientAuthInitRequestQueryRequester withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public PatientAuthInitRequestQueryRequesterTypeEnum type;
    public PatientAuthInitRequestQueryRequester withType(PatientAuthInitRequestQueryRequesterTypeEnum type) {
        this.type = type;
        return this;
    }
}