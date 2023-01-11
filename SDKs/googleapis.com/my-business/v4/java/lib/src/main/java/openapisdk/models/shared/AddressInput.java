package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddressInput
 * Input for ADDRESS verification.
**/
public class AddressInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailerContactName")
    public String mailerContactName;
    public AddressInput withMailerContactName(String mailerContactName) {
        this.mailerContactName = mailerContactName;
        return this;
    }
}