package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonFollow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public PersonFollowEmbedded embedded;
    public PersonFollow withEmbedded(PersonFollowEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person_id")
    public Long personId;
    public PersonFollow withPersonId(Long personId) {
        this.personId = personId;
        return this;
    }
}