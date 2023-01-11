package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Identifies an account and how to log into it.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAuto")
    public java.util.Map<String, Object> googleAuto;
    public Account withGoogleAuto(java.util.Map<String, Object> googleAuto) {
        this.googleAuto = googleAuto;
        return this;
    }
}