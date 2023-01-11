package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acceptsIncomplete")
    public Boolean acceptsIncomplete;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withAcceptsIncomplete(Boolean acceptsIncomplete) {
        this.acceptsIncomplete = acceptsIncomplete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}