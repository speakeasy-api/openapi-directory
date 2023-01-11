package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLabelFromShipmentResponseBodyOptionalLink
 * A link to a related resource, or an empty object if there is no resource to link to
**/
public class CreateLabelFromShipmentResponseBodyOptionalLink {
    @JsonProperty("href")
    public String href;
    public CreateLabelFromShipmentResponseBodyOptionalLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CreateLabelFromShipmentResponseBodyOptionalLink withType(String type) {
        this.type = type;
        return this;
    }
}