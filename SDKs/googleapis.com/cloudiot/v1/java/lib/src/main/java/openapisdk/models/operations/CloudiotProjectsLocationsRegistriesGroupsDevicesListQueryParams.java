package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceIds")
    public String[] deviceIds;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withDeviceIds(String[] deviceIds) {
        this.deviceIds = deviceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceNumIds")
    public String[] deviceNumIds;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withDeviceNumIds(String[] deviceNumIds) {
        this.deviceNumIds = deviceNumIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldMask")
    public String fieldMask;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withFieldMask(String fieldMask) {
        this.fieldMask = fieldMask;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gatewayListOptions.associationsDeviceId")
    public String gatewayListOptionsAssociationsDeviceId;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withGatewayListOptionsAssociationsDeviceId(String gatewayListOptionsAssociationsDeviceId) {
        this.gatewayListOptionsAssociationsDeviceId = gatewayListOptionsAssociationsDeviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gatewayListOptions.associationsGatewayId")
    public String gatewayListOptionsAssociationsGatewayId;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withGatewayListOptionsAssociationsGatewayId(String gatewayListOptionsAssociationsGatewayId) {
        this.gatewayListOptionsAssociationsGatewayId = gatewayListOptionsAssociationsGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gatewayListOptions.gatewayType")
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum gatewayListOptionsGatewayType;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withGatewayListOptionsGatewayType(CloudiotProjectsLocationsRegistriesGroupsDevicesListGatewayListOptionsGatewayTypeEnum gatewayListOptionsGatewayType) {
        this.gatewayListOptionsGatewayType = gatewayListOptionsGatewayType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public CloudiotProjectsLocationsRegistriesGroupsDevicesListQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}