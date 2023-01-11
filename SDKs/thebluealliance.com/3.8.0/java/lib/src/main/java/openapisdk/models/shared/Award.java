package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Award {
    @JsonProperty("award_type")
    public Long awardType;
    public Award withAwardType(Long awardType) {
        this.awardType = awardType;
        return this;
    }
    @JsonProperty("event_key")
    public String eventKey;
    public Award withEventKey(String eventKey) {
        this.eventKey = eventKey;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Award withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("recipient_list")
    public AwardRecipient[] recipientList;
    public Award withRecipientList(AwardRecipient[] recipientList) {
        this.recipientList = recipientList;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public Award withYear(Long year) {
        this.year = year;
        return this;
    }
}