package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersettingsNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchMyInterests")
    public UsersettingsNotificationMatchMyInterests matchMyInterests;
    public UsersettingsNotification withMatchMyInterests(UsersettingsNotificationMatchMyInterests matchMyInterests) {
        this.matchMyInterests = matchMyInterests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreFromAuthors")
    public UsersettingsNotificationMoreFromAuthors moreFromAuthors;
    public UsersettingsNotification withMoreFromAuthors(UsersettingsNotificationMoreFromAuthors moreFromAuthors) {
        this.moreFromAuthors = moreFromAuthors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moreFromSeries")
    public UsersettingsNotificationMoreFromSeries moreFromSeries;
    public UsersettingsNotification withMoreFromSeries(UsersettingsNotificationMoreFromSeries moreFromSeries) {
        this.moreFromSeries = moreFromSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDrop")
    public UsersettingsNotificationPriceDrop priceDrop;
    public UsersettingsNotification withPriceDrop(UsersettingsNotificationPriceDrop priceDrop) {
        this.priceDrop = priceDrop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rewardExpirations")
    public UsersettingsNotificationRewardExpirations rewardExpirations;
    public UsersettingsNotification withRewardExpirations(UsersettingsNotificationRewardExpirations rewardExpirations) {
        this.rewardExpirations = rewardExpirations;
        return this;
    }
}