package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class AccountSettingsRequest {
    @SpeakeasyMetadata("form:name=drCallBackUrl")
    public String drCallBackUrl;
    public AccountSettingsRequest withDrCallBackUrl(String drCallBackUrl) {
        this.drCallBackUrl = drCallBackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=moCallBackUrl")
    public String moCallBackUrl;
    public AccountSettingsRequest withMoCallBackUrl(String moCallBackUrl) {
        this.moCallBackUrl = moCallBackUrl;
        return this;
    }
}