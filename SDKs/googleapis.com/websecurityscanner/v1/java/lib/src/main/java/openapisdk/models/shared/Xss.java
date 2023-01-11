package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Xss
 * Information reported for an XSS.
**/
public class Xss {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attackVector")
    public XssAttackVectorEnum attackVector;
    public Xss withAttackVector(XssAttackVectorEnum attackVector) {
        this.attackVector = attackVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public Xss withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackTraces")
    public String[] stackTraces;
    public Xss withStackTraces(String[] stackTraces) {
        this.stackTraces = stackTraces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedXssSeedingUrl")
    public String storedXssSeedingUrl;
    public Xss withStoredXssSeedingUrl(String storedXssSeedingUrl) {
        this.storedXssSeedingUrl = storedXssSeedingUrl;
        return this;
    }
}