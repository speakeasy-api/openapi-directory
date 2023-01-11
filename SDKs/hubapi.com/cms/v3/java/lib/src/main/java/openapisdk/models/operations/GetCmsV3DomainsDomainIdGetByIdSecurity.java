package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCmsV3DomainsDomainIdGetByIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withPrivateAppsLegacy(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy) {
        this.privateAppsLegacy = privateAppsLegacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateApps privateApps;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withPrivateApps(openapisdk.models.shared.SchemePrivateApps privateApps) {
        this.privateApps = privateApps;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeHapikey hapikey;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withHapikey(openapisdk.models.shared.SchemeHapikey hapikey) {
        this.hapikey = hapikey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateApps privateApps1;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withPrivateApps1(openapisdk.models.shared.SchemePrivateApps privateApps1) {
        this.privateApps1 = privateApps1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth3;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withOauth3(openapisdk.models.shared.SchemeOauth2 oauth3) {
        this.oauth3 = oauth3;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withPrivateAppsLegacy1(openapisdk.models.shared.SchemePrivateAppsLegacy privateAppsLegacy1) {
        this.privateAppsLegacy1 = privateAppsLegacy1;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withOauth2Legacy(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy) {
        this.oauth2Legacy = oauth2Legacy;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1;
    public GetCmsV3DomainsDomainIdGetByIdSecurity withOauth2Legacy1(openapisdk.models.shared.SchemeOauth2Legacy oauth2Legacy1) {
        this.oauth2Legacy1 = oauth2Legacy1;
        return this;
    }
}