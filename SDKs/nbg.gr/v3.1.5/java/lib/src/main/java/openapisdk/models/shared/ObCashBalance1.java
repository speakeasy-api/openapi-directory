package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObCashBalance1
 * Set of elements used to define the balance details.
**/
public class ObCashBalance1 {
    @JsonProperty("AccountId")
    public String accountId;
    public ObCashBalance1 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("Amount")
    public ObActiveOrHistoricCurrencyAndAmount amount;
    public ObCashBalance1 withAmount(ObActiveOrHistoricCurrencyAndAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("CreditDebitIndicator")
    public ObCreditDebitCodeEnum creditDebitIndicator;
    public ObCashBalance1 withCreditDebitIndicator(ObCreditDebitCodeEnum creditDebitIndicator) {
        this.creditDebitIndicator = creditDebitIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditLine")
    public ObCreditLine1[] creditLine;
    public ObCashBalance1 withCreditLine(ObCreditLine1[] creditLine) {
        this.creditLine = creditLine;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("DateTime")
    public OffsetDateTime dateTime;
    public ObCashBalance1 withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonProperty("Type")
    public ObBalanceType1CodeEnum type;
    public ObCashBalance1 withType(ObBalanceType1CodeEnum type) {
        this.type = type;
        return this;
    }
}