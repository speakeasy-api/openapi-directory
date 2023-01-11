package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBatchByIdResponseBodyOptionalLink
 * A link to a related resource, or an empty object if there is no resource to link to
**/
public class GetBatchByIdResponseBodyOptionalLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetBatchByIdResponseBodyOptionalLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetBatchByIdResponseBodyOptionalLink withType(String type) {
        this.type = type;
        return this;
    }
}