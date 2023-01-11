package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Representation of an account.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Account withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Account withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Account withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingTasks")
    public String[] pendingTasks;
    public Account withPendingTasks(String[] pendingTasks) {
        this.pendingTasks = pendingTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium")
    public Boolean premium;
    public Account withPremium(Boolean premium) {
        this.premium = premium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AccountStateEnum state;
    public Account withState(AccountStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public TimeZone timeZone;
    public Account withTimeZone(TimeZone timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}