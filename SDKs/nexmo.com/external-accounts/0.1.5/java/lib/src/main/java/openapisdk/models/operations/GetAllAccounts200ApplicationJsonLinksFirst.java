package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllAccounts200ApplicationJsonLinksFirst {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetAllAccounts200ApplicationJsonLinksFirst withHref(String href) {
        this.href = href;
        return this;
    }
}