package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonResponse
 * The response for a single person
**/
public class PersonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpStatusCode")
    public Integer httpStatusCode;
    public PersonResponse withHttpStatusCode(Integer httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public Person person;
    public PersonResponse withPerson(Person person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedResourceName")
    public String requestedResourceName;
    public PersonResponse withRequestedResourceName(String requestedResourceName) {
        this.requestedResourceName = requestedResourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public PersonResponse withStatus(Status status) {
        this.status = status;
        return this;
    }
}