package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SourceAccountResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoTopUpConfig")
    public AutoTopUpConfig2 autoTopUpConfig;
    public SourceAccountResponseV3 withAutoTopUpConfig(AutoTopUpConfig2 autoTopUpConfig) {
        this.autoTopUpConfig = autoTopUpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public SourceAccountResponseV3 withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public SourceAccountResponseV3 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public SourceAccountResponseV3CurrencyEnum currency;
    public SourceAccountResponseV3 withCurrency(SourceAccountResponseV3CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public SourceAccountResponseV3 withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public SourceAccountResponseV3 withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deletedAt")
    public OffsetDateTime deletedAt;
    public SourceAccountResponseV3 withDeletedAt(OffsetDateTime deletedAt) {
        this.deletedAt = deletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingRef")
    public String fundingRef;
    public SourceAccountResponseV3 withFundingRef(String fundingRef) {
        this.fundingRef = fundingRef;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SourceAccountResponseV3 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SourceAccountResponseV3 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notifications2 notifications;
    public SourceAccountResponseV3 withNotifications(Notifications2 notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public SourceAccountResponseV3 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalAccountId")
    public String physicalAccountId;
    public SourceAccountResponseV3 withPhysicalAccountId(String physicalAccountId) {
        this.physicalAccountId = physicalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalAccountName")
    public String physicalAccountName;
    public SourceAccountResponseV3 withPhysicalAccountName(String physicalAccountName) {
        this.physicalAccountName = physicalAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pooled")
    public Boolean pooled;
    public SourceAccountResponseV3 withPooled(Boolean pooled) {
        this.pooled = pooled;
        return this;
    }
    @JsonProperty("railsId")
    public String railsId;
    public SourceAccountResponseV3 withRailsId(String railsId) {
        this.railsId = railsId;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public SourceAccountResponseV3 withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDeleted")
    public Boolean userDeleted;
    public SourceAccountResponseV3 withUserDeleted(Boolean userDeleted) {
        this.userDeleted = userDeleted;
        return this;
    }
}