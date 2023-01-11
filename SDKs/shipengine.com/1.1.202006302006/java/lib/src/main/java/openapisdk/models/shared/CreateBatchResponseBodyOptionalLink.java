package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBatchResponseBodyOptionalLink
 * A link to a related resource, or an empty object if there is no resource to link to
**/
public class CreateBatchResponseBodyOptionalLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CreateBatchResponseBodyOptionalLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CreateBatchResponseBodyOptionalLink withType(String type) {
        this.type = type;
        return this;
    }
}