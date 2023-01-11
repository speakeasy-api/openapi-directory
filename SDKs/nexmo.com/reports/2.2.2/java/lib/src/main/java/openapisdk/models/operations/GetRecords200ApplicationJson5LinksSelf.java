package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecords200ApplicationJson5LinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetRecords200ApplicationJson5LinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}