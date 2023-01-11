package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public MirrorTimelineListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bundleId")
    public String bundleId;
    public MirrorTimelineListQueryParams withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public MirrorTimelineListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDeleted")
    public Boolean includeDeleted;
    public MirrorTimelineListQueryParams withIncludeDeleted(Boolean includeDeleted) {
        this.includeDeleted = includeDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public MirrorTimelineListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public MirrorTimelineListQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public MirrorTimelineListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public MirrorTimelineListOrderByEnum orderBy;
    public MirrorTimelineListQueryParams withOrderBy(MirrorTimelineListOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public MirrorTimelineListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinnedOnly")
    public Boolean pinnedOnly;
    public MirrorTimelineListQueryParams withPinnedOnly(Boolean pinnedOnly) {
        this.pinnedOnly = pinnedOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public MirrorTimelineListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public MirrorTimelineListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceItemId")
    public String sourceItemId;
    public MirrorTimelineListQueryParams withSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public MirrorTimelineListQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}