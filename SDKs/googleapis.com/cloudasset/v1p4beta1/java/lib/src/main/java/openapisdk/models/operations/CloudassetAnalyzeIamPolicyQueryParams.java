package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetAnalyzeIamPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public CloudassetAnalyzeIamPolicyQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public CloudassetAnalyzeIamPolicyQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CloudassetAnalyzeIamPolicyQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analysisQuery.accessSelector.permissions")
    public String[] analysisQueryAccessSelectorPermissions;
    public CloudassetAnalyzeIamPolicyQueryParams withAnalysisQueryAccessSelectorPermissions(String[] analysisQueryAccessSelectorPermissions) {
        this.analysisQueryAccessSelectorPermissions = analysisQueryAccessSelectorPermissions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analysisQuery.accessSelector.roles")
    public String[] analysisQueryAccessSelectorRoles;
    public CloudassetAnalyzeIamPolicyQueryParams withAnalysisQueryAccessSelectorRoles(String[] analysisQueryAccessSelectorRoles) {
        this.analysisQueryAccessSelectorRoles = analysisQueryAccessSelectorRoles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analysisQuery.identitySelector.identity")
    public String analysisQueryIdentitySelectorIdentity;
    public CloudassetAnalyzeIamPolicyQueryParams withAnalysisQueryIdentitySelectorIdentity(String analysisQueryIdentitySelectorIdentity) {
        this.analysisQueryIdentitySelectorIdentity = analysisQueryIdentitySelectorIdentity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analysisQuery.resourceSelector.fullResourceName")
    public String analysisQueryResourceSelectorFullResourceName;
    public CloudassetAnalyzeIamPolicyQueryParams withAnalysisQueryResourceSelectorFullResourceName(String analysisQueryResourceSelectorFullResourceName) {
        this.analysisQueryResourceSelectorFullResourceName = analysisQueryResourceSelectorFullResourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public CloudassetAnalyzeIamPolicyQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CloudassetAnalyzeIamPolicyQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CloudassetAnalyzeIamPolicyQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CloudassetAnalyzeIamPolicyQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.analyzeServiceAccountImpersonation")
    public Boolean optionsAnalyzeServiceAccountImpersonation;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsAnalyzeServiceAccountImpersonation(Boolean optionsAnalyzeServiceAccountImpersonation) {
        this.optionsAnalyzeServiceAccountImpersonation = optionsAnalyzeServiceAccountImpersonation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.executionTimeout")
    public String optionsExecutionTimeout;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsExecutionTimeout(String optionsExecutionTimeout) {
        this.optionsExecutionTimeout = optionsExecutionTimeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.expandGroups")
    public Boolean optionsExpandGroups;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsExpandGroups(Boolean optionsExpandGroups) {
        this.optionsExpandGroups = optionsExpandGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.expandResources")
    public Boolean optionsExpandResources;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsExpandResources(Boolean optionsExpandResources) {
        this.optionsExpandResources = optionsExpandResources;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.expandRoles")
    public Boolean optionsExpandRoles;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsExpandRoles(Boolean optionsExpandRoles) {
        this.optionsExpandRoles = optionsExpandRoles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.outputGroupEdges")
    public Boolean optionsOutputGroupEdges;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsOutputGroupEdges(Boolean optionsOutputGroupEdges) {
        this.optionsOutputGroupEdges = optionsOutputGroupEdges;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options.outputResourceEdges")
    public Boolean optionsOutputResourceEdges;
    public CloudassetAnalyzeIamPolicyQueryParams withOptionsOutputResourceEdges(Boolean optionsOutputResourceEdges) {
        this.optionsOutputResourceEdges = optionsOutputResourceEdges;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CloudassetAnalyzeIamPolicyQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CloudassetAnalyzeIamPolicyQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public CloudassetAnalyzeIamPolicyQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public CloudassetAnalyzeIamPolicyQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}