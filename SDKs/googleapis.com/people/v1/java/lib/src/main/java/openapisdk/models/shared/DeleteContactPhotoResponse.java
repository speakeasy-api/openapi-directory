package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteContactPhotoResponse
 * The response for deleting a contact's photo.
**/
public class DeleteContactPhotoResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public Person person;
    public DeleteContactPhotoResponse withPerson(Person person) {
        this.person = person;
        return this;
    }
}