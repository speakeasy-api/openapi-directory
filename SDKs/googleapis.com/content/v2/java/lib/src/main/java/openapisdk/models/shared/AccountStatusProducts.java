package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountStatusProducts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;
    public AccountStatusProducts withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public AccountStatusProducts withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public AccountStatusProducts withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemLevelIssues")
    public AccountStatusItemLevelIssue[] itemLevelIssues;
    public AccountStatusProducts withItemLevelIssues(AccountStatusItemLevelIssue[] itemLevelIssues) {
        this.itemLevelIssues = itemLevelIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public AccountStatusStatistics statistics;
    public AccountStatusProducts withStatistics(AccountStatusStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
}