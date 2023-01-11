package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeploymentmanagerDeploymentsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public DeploymentmanagerDeploymentsUpdateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public DeploymentmanagerDeploymentsUpdateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DeploymentmanagerDeploymentsUpdateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public DeploymentmanagerDeploymentsUpdateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createPolicy")
    public DeploymentmanagerDeploymentsUpdateCreatePolicyEnum createPolicy;
    public DeploymentmanagerDeploymentsUpdateQueryParams withCreatePolicy(DeploymentmanagerDeploymentsUpdateCreatePolicyEnum createPolicy) {
        this.createPolicy = createPolicy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deletePolicy")
    public DeploymentmanagerDeploymentsUpdateDeletePolicyEnum deletePolicy;
    public DeploymentmanagerDeploymentsUpdateQueryParams withDeletePolicy(DeploymentmanagerDeploymentsUpdateDeletePolicyEnum deletePolicy) {
        this.deletePolicy = deletePolicy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DeploymentmanagerDeploymentsUpdateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DeploymentmanagerDeploymentsUpdateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DeploymentmanagerDeploymentsUpdateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DeploymentmanagerDeploymentsUpdateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preview")
    public Boolean preview;
    public DeploymentmanagerDeploymentsUpdateQueryParams withPreview(Boolean preview) {
        this.preview = preview;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DeploymentmanagerDeploymentsUpdateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public DeploymentmanagerDeploymentsUpdateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public DeploymentmanagerDeploymentsUpdateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}