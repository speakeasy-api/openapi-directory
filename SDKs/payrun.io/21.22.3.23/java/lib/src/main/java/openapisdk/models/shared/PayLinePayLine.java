package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayLinePayLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Calculator")
    public String calculator;
    public PayLinePayLine withCalculator(String calculator) {
        this.calculator = calculator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PayLinePayLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Generated")
    public OffsetDateTime generated;
    public PayLinePayLine withGenerated(OffsetDateTime generated) {
        this.generated = generated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCode")
    public String payCode;
    public PayLinePayLine withPayCode(String payCode) {
        this.payCode = payCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCodeType")
    public PayLinePayLinePayCodeTypeEnum payCodeType;
    public PayLinePayLine withPayCodeType(PayLinePayLinePayCodeTypeEnum payCodeType) {
        this.payCodeType = payCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRunSequence")
    public Integer payRunSequence;
    public PayLinePayLine withPayRunSequence(Integer payRunSequence) {
        this.payRunSequence = payRunSequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentDate")
    public LocalDate paymentDate;
    public PayLinePayLine withPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxPeriod")
    public Integer taxPeriod;
    public PayLinePayLine withTaxPeriod(Integer taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public PayLinePayLine withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public PayLinePayLine withValue(Double value) {
        this.value = value;
        return this;
    }
}