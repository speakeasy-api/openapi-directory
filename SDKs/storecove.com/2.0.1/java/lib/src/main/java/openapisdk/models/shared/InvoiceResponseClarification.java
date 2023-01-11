package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceResponseClarification
 * A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
**/
public class InvoiceResponseClarification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clarification")
    public String clarification;
    public InvoiceResponseClarification withClarification(String clarification) {
        this.clarification = clarification;
        return this;
    }
    @JsonProperty("clarificationCode")
    public InvoiceResponseClarificationClarificationCodeEnum clarificationCode;
    public InvoiceResponseClarification withClarificationCode(InvoiceResponseClarificationClarificationCodeEnum clarificationCode) {
        this.clarificationCode = clarificationCode;
        return this;
    }
    @JsonProperty("clarificationCodeType")
    public InvoiceResponseClarificationClarificationCodeTypeEnum clarificationCodeType;
    public InvoiceResponseClarification withClarificationCodeType(InvoiceResponseClarificationClarificationCodeTypeEnum clarificationCodeType) {
        this.clarificationCodeType = clarificationCodeType;
        return this;
    }
}