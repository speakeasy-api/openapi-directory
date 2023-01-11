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
 * AccountsBalanceGetRequestOptions
 * An optional object to filter `/accounts/balance/get` results.
**/
public class AccountsBalanceGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_ids")
    public String[] accountIds;
    public AccountsBalanceGetRequestOptions withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("min_last_updated_datetime")
    public OffsetDateTime minLastUpdatedDatetime;
    public AccountsBalanceGetRequestOptions withMinLastUpdatedDatetime(OffsetDateTime minLastUpdatedDatetime) {
        this.minLastUpdatedDatetime = minLastUpdatedDatetime;
        return this;
    }
}