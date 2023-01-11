package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson8LinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetRecords200ApplicationJson8LinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}