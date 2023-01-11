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

/**
 * Balance
 * A single balance element.
 * 
**/
public class Balance {
    @JsonProperty("balanceAmount")
    public Amount balanceAmount;
    public Balance withBalanceAmount(Amount balanceAmount) {
        this.balanceAmount = balanceAmount;
        return this;
    }
    @JsonProperty("balanceType")
    public BalanceTypeEnum balanceType;
    public Balance withBalanceType(BalanceTypeEnum balanceType) {
        this.balanceType = balanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditLimitIncluded")
    public Boolean creditLimitIncluded;
    public Balance withCreditLimitIncluded(Boolean creditLimitIncluded) {
        this.creditLimitIncluded = creditLimitIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastChangeDateTime")
    public OffsetDateTime lastChangeDateTime;
    public Balance withLastChangeDateTime(OffsetDateTime lastChangeDateTime) {
        this.lastChangeDateTime = lastChangeDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastCommittedTransaction")
    public String lastCommittedTransaction;
    public Balance withLastCommittedTransaction(String lastCommittedTransaction) {
        this.lastCommittedTransaction = lastCommittedTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceDate")
    public LocalDate referenceDate;
    public Balance withReferenceDate(LocalDate referenceDate) {
        this.referenceDate = referenceDate;
        return this;
    }
}