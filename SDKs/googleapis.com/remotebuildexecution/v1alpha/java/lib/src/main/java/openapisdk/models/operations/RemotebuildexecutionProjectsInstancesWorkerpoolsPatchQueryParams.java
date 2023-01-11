package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=loggingEnabled")
    public Boolean loggingEnabled;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withLoggingEnabled(Boolean loggingEnabled) {
        this.loggingEnabled = loggingEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name1")
    public String name1;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withName1(String name1) {
        this.name1 = name1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updateMask")
    public String updateMask;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}