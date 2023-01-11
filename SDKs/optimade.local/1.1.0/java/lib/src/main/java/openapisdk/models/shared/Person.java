package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Person
 * A person, i.e., an author, editor or other.
**/
public class Person {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public Person withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public Person withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Person withName(String name) {
        this.name = name;
        return this;
    }
}