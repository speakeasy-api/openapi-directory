package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationReference
 * Activity in applications other than Drive.
**/
public class ApplicationReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ApplicationReferenceTypeEnum type;
    public ApplicationReference withType(ApplicationReferenceTypeEnum type) {
        this.type = type;
        return this;
    }
}