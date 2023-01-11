package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateContactPhotoRequest
 * A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
**/
public class UpdateContactPhotoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personFields")
    public String personFields;
    public UpdateContactPhotoRequest withPersonFields(String personFields) {
        this.personFields = personFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoBytes")
    public String photoBytes;
    public UpdateContactPhotoRequest withPhotoBytes(String photoBytes) {
        this.photoBytes = photoBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public UpdateContactPhotoRequestSourcesEnum[] sources;
    public UpdateContactPhotoRequest withSources(UpdateContactPhotoRequestSourcesEnum[] sources) {
        this.sources = sources;
        return this;
    }
}