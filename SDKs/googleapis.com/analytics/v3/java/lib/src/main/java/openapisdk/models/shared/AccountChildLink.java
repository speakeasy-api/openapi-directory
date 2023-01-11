package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountChildLink
 * Child link for an account entry. Points to the list of web properties for this account.
**/
public class AccountChildLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public AccountChildLink withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountChildLink withType(String type) {
        this.type = type;
        return this;
    }
}