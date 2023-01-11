package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PensionPensionPensionablePayCodes
 * The pensions' pensionable pay codes
**/
public class PensionPensionPensionablePayCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCode")
    public String[] payCode;
    public PensionPensionPensionablePayCodes withPayCode(String[] payCode) {
        this.payCode = payCode;
        return this;
    }
}