package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocByline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public DocByline withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original")
    public String original;
    public DocByline withOriginal(String original) {
        this.original = original;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public Object[] person;
    public DocByline withPerson(Object[] person) {
        this.person = person;
        return this;
    }
}