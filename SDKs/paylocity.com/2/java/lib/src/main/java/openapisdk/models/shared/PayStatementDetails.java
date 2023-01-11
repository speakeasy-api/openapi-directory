package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayStatementDetails
 * The pay statement details model
**/
public class PayStatementDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PayStatementDetails withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkDate")
    public String checkDate;
    public PayStatementDetails withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("det")
    public String det;
    public PayStatementDetails withDet(String det) {
        this.det = det;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detCode")
    public String detCode;
    public PayStatementDetails withDetCode(String detCode) {
        this.detCode = detCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detType")
    public String detType;
    public PayStatementDetails withDetType(String detType) {
        this.detType = detType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleCompensation")
    public Double eligibleCompensation;
    public PayStatementDetails withEligibleCompensation(Double eligibleCompensation) {
        this.eligibleCompensation = eligibleCompensation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Double hours;
    public PayStatementDetails withHours(Double hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public PayStatementDetails withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionNumber")
    public Long transactionNumber;
    public PayStatementDetails withTransactionNumber(Long transactionNumber) {
        this.transactionNumber = transactionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionType")
    public String transactionType;
    public PayStatementDetails withTransactionType(String transactionType) {
        this.transactionType = transactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public PayStatementDetails withYear(Long year) {
        this.year = year;
        return this;
    }
}