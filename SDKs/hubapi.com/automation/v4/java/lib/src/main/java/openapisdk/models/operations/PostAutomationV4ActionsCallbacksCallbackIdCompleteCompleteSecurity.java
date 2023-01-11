package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity withOauth2Legacy(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy) {
        this.oauth2Legacy = oauth2Legacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeHapikey hapikey;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity withHapikey(openapisdk.models.shared.SchemeHapikey hapikey) {
        this.hapikey = hapikey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy;
    public PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity withPrivateAppsLegacy(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy) {
        this.privateAppsLegacy = privateAppsLegacy;
        return this;
    }
}