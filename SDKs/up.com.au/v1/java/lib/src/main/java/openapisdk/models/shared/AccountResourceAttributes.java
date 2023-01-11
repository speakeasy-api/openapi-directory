package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AccountResourceAttributes {
    @JsonProperty("accountType")
    public Object accountType;
    public AccountResourceAttributes withAccountType(Object accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonProperty("balance")
    public MoneyObject balance;
    public AccountResourceAttributes withBalance(MoneyObject balance) {
        this.balance = balance;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AccountResourceAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("displayName")
    public String displayName;
    public AccountResourceAttributes withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}