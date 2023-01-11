package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubscriptionCreateModify {
    @JsonProperty("action")
    public String action;
    public SubscriptionCreateModify withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackOnModify")
    public Boolean callbackOnModify;
    public SubscriptionCreateModify withCallbackOnModify(Boolean callbackOnModify) {
        this.callbackOnModify = callbackOnModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public SubscriptionCreateModify withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public SubscriptionCreateModify withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonProperty("frequency")
    public String frequency;
    public SubscriptionCreateModify withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SubscriptionCreateModify withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SubscriptionCreateModify withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public SubscriptionCreateModify withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startFrom")
    public String startFrom;
    public SubscriptionCreateModify withStartFrom(String startFrom) {
        this.startFrom = startFrom;
        return this;
    }
}