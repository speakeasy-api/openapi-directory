package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecretMgmtLinksSelf
 * This resource
**/
public class SecretMgmtLinksSelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SecretMgmtLinksSelf withHref(String href) {
        this.href = href;
        return this;
    }
}