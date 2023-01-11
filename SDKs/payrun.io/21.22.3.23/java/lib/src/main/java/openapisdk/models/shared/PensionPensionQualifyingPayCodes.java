package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PensionPensionQualifyingPayCodes
 * The pensions' qualifying pay codes
**/
public class PensionPensionQualifyingPayCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCode")
    public String[] payCode;
    public PensionPensionQualifyingPayCodes withPayCode(String[] payCode) {
        this.payCode = payCode;
        return this;
    }
}