package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PagespeedonlinePagespeedapiRunpagespeedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_third_party_resources")
    public Boolean filterThirdPartyResources;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withFilterThirdPartyResources(Boolean filterThirdPartyResources) {
        this.filterThirdPartyResources = filterThirdPartyResources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rule")
    public String[] rule;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withRule(String[] rule) {
        this.rule = rule;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=screenshot")
    public Boolean screenshot;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withScreenshot(Boolean screenshot) {
        this.screenshot = screenshot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=snapshots")
    public Boolean snapshots;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withSnapshots(Boolean snapshots) {
        this.snapshots = snapshots;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=strategy")
    public PagespeedonlinePagespeedapiRunpagespeedStrategyEnum strategy;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withStrategy(PagespeedonlinePagespeedapiRunpagespeedStrategyEnum strategy) {
        this.strategy = strategy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=utm_campaign")
    public String utmCampaign;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUtmCampaign(String utmCampaign) {
        this.utmCampaign = utmCampaign;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=utm_source")
    public String utmSource;
    public PagespeedonlinePagespeedapiRunpagespeedQueryParams withUtmSource(String utmSource) {
        this.utmSource = utmSource;
        return this;
    }
}