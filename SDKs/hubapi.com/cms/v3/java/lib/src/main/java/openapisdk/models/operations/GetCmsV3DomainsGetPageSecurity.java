package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCmsV3DomainsGetPageSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy;
    public GetCmsV3DomainsGetPageSecurity withPrivateAppsLegacy(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy) {
        this.privateAppsLegacy = privateAppsLegacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public GetCmsV3DomainsGetPageSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateApps privateApps;
    public GetCmsV3DomainsGetPageSecurity withPrivateApps(openapisdk.models.shared.SchemePrivateApps privateApps) {
        this.privateApps = privateApps;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeHapikey hapikey;
    public GetCmsV3DomainsGetPageSecurity withHapikey(openapisdk.models.shared.SchemeHapikey hapikey) {
        this.hapikey = hapikey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateApps privateApps1;
    public GetCmsV3DomainsGetPageSecurity withPrivateApps1(openapisdk.models.shared.SchemePrivateApps privateApps1) {
        this.privateApps1 = privateApps1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth3;
    public GetCmsV3DomainsGetPageSecurity withOauth3(openapisdk.models.shared.SchemeOauth2 oauth3) {
        this.oauth3 = oauth3;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1;
    public GetCmsV3DomainsGetPageSecurity withPrivateAppsLegacy1(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1) {
        this.privateAppsLegacy1 = privateAppsLegacy1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy;
    public GetCmsV3DomainsGetPageSecurity withOauth2Legacy(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy) {
        this.oauth2Legacy = oauth2Legacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1;
    public GetCmsV3DomainsGetPageSecurity withOauth2Legacy1(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1) {
        this.oauth2Legacy1 = oauth2Legacy1;
        return this;
    }
}