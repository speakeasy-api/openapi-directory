package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonImage
 * The representation of the person's profile photo.
**/
public class PersonImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public PersonImage withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PersonImage withUrl(String url) {
        this.url = url;
        return this;
    }
}