package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountInfo
 * The accounts to search
**/
public class AccountInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public AccountInfo withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
}