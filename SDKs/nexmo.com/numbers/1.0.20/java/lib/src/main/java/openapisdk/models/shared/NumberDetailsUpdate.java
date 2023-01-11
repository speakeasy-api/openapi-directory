package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class NumberDetailsUpdate {
    @SpeakeasyMetadata("form:name=app_id")
    public String appId;
    public NumberDetailsUpdate withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("form:name=country")
    public String country;
    public NumberDetailsUpdate withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=messagesCallbackType")
    public NumberDetailsUpdateMessagesCallbackTypeEnum messagesCallbackType;
    public NumberDetailsUpdate withMessagesCallbackType(NumberDetailsUpdateMessagesCallbackTypeEnum messagesCallbackType) {
        this.messagesCallbackType = messagesCallbackType;
        return this;
    }
    @SpeakeasyMetadata("form:name=messagesCallbackValue")
    public String messagesCallbackValue;
    public NumberDetailsUpdate withMessagesCallbackValue(String messagesCallbackValue) {
        this.messagesCallbackValue = messagesCallbackValue;
        return this;
    }
    @SpeakeasyMetadata("form:name=moHttpUrl")
    public String moHttpUrl;
    public NumberDetailsUpdate withMoHttpUrl(String moHttpUrl) {
        this.moHttpUrl = moHttpUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=moSmppSysType")
    public String moSmppSysType;
    public NumberDetailsUpdate withMoSmppSysType(String moSmppSysType) {
        this.moSmppSysType = moSmppSysType;
        return this;
    }
    @SpeakeasyMetadata("form:name=msisdn")
    public String msisdn;
    public NumberDetailsUpdate withMsisdn(String msisdn) {
        this.msisdn = msisdn;
        return this;
    }
    @SpeakeasyMetadata("form:name=voiceCallbackType")
    public NumberDetailsUpdateVoiceCallbackTypeEnum voiceCallbackType;
    public NumberDetailsUpdate withVoiceCallbackType(NumberDetailsUpdateVoiceCallbackTypeEnum voiceCallbackType) {
        this.voiceCallbackType = voiceCallbackType;
        return this;
    }
    @SpeakeasyMetadata("form:name=voiceCallbackValue")
    public String voiceCallbackValue;
    public NumberDetailsUpdate withVoiceCallbackValue(String voiceCallbackValue) {
        this.voiceCallbackValue = voiceCallbackValue;
        return this;
    }
    @SpeakeasyMetadata("form:name=voiceStatusCallback")
    public String voiceStatusCallback;
    public NumberDetailsUpdate withVoiceStatusCallback(String voiceStatusCallback) {
        this.voiceStatusCallback = voiceStatusCallback;
        return this;
    }
}