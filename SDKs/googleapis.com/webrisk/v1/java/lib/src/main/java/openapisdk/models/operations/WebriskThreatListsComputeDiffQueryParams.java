package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskThreatListsComputeDiffQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public WebriskThreatListsComputeDiffQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public WebriskThreatListsComputeDiffQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public WebriskThreatListsComputeDiffQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public WebriskThreatListsComputeDiffQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constraints.maxDatabaseEntries")
    public Long constraintsMaxDatabaseEntries;
    public WebriskThreatListsComputeDiffQueryParams withConstraintsMaxDatabaseEntries(Long constraintsMaxDatabaseEntries) {
        this.constraintsMaxDatabaseEntries = constraintsMaxDatabaseEntries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constraints.maxDiffEntries")
    public Long constraintsMaxDiffEntries;
    public WebriskThreatListsComputeDiffQueryParams withConstraintsMaxDiffEntries(Long constraintsMaxDiffEntries) {
        this.constraintsMaxDiffEntries = constraintsMaxDiffEntries;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=constraints.supportedCompressions")
    public WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[] constraintsSupportedCompressions;
    public WebriskThreatListsComputeDiffQueryParams withConstraintsSupportedCompressions(WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[] constraintsSupportedCompressions) {
        this.constraintsSupportedCompressions = constraintsSupportedCompressions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public WebriskThreatListsComputeDiffQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public WebriskThreatListsComputeDiffQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public WebriskThreatListsComputeDiffQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public WebriskThreatListsComputeDiffQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public WebriskThreatListsComputeDiffQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=threatType")
    public WebriskThreatListsComputeDiffThreatTypeEnum threatType;
    public WebriskThreatListsComputeDiffQueryParams withThreatType(WebriskThreatListsComputeDiffThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public WebriskThreatListsComputeDiffQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public WebriskThreatListsComputeDiffQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionToken")
    public String versionToken;
    public WebriskThreatListsComputeDiffQueryParams withVersionToken(String versionToken) {
        this.versionToken = versionToken;
        return this;
    }
}