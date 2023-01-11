package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Ownednumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Ownednumber withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public String[] features;
    public Ownednumber withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messagesCallbackType")
    public String messagesCallbackType;
    public Ownednumber withMessagesCallbackType(String messagesCallbackType) {
        this.messagesCallbackType = messagesCallbackType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messagesCallbackValue")
    public String messagesCallbackValue;
    public Ownednumber withMessagesCallbackValue(String messagesCallbackValue) {
        this.messagesCallbackValue = messagesCallbackValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moHttpUrl")
    public String moHttpUrl;
    public Ownednumber withMoHttpUrl(String moHttpUrl) {
        this.moHttpUrl = moHttpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msisdn")
    public String msisdn;
    public Ownednumber withMsisdn(String msisdn) {
        this.msisdn = msisdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Ownednumber withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceCallbackType")
    public String voiceCallbackType;
    public Ownednumber withVoiceCallbackType(String voiceCallbackType) {
        this.voiceCallbackType = voiceCallbackType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceCallbackValue")
    public String voiceCallbackValue;
    public Ownednumber withVoiceCallbackValue(String voiceCallbackValue) {
        this.voiceCallbackValue = voiceCallbackValue;
        return this;
    }
}