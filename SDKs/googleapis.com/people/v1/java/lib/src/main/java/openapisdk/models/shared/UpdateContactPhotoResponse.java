package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateContactPhotoResponse
 * The response for updating a contact's photo.
**/
public class UpdateContactPhotoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public Person person;
    public UpdateContactPhotoResponse withPerson(Person person) {
        this.person = person;
        return this;
    }
}