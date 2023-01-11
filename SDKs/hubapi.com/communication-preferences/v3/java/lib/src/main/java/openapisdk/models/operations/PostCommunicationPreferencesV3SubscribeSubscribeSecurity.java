package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommunicationPreferencesV3SubscribeSubscribeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy;
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity withOauth2Legacy(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy) {
        this.oauth2Legacy = oauth2Legacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeHapikey hapikey;
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity withHapikey(openapisdk.models.shared.SchemeHapikey hapikey) {
        this.hapikey = hapikey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1;
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity withOauth2Legacy1(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1) {
        this.oauth2Legacy1 = oauth2Legacy1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy;
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity withPrivateAppsLegacy(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy) {
        this.privateAppsLegacy = privateAppsLegacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1;
    public PostCommunicationPreferencesV3SubscribeSubscribeSecurity withPrivateAppsLegacy1(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1) {
        this.privateAppsLegacy1 = privateAppsLegacy1;
        return this;
    }
}