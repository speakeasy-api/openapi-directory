package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VectortileTerraintilesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public VectortileTerraintilesGetQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public VectortileTerraintilesGetQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public VectortileTerraintilesGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=altitudePrecisionCentimeters")
    public Long altitudePrecisionCentimeters;
    public VectortileTerraintilesGetQueryParams withAltitudePrecisionCentimeters(Long altitudePrecisionCentimeters) {
        this.altitudePrecisionCentimeters = altitudePrecisionCentimeters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public VectortileTerraintilesGetQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.apiClient")
    public String clientInfoApiClient;
    public VectortileTerraintilesGetQueryParams withClientInfoApiClient(String clientInfoApiClient) {
        this.clientInfoApiClient = clientInfoApiClient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.applicationId")
    public String clientInfoApplicationId;
    public VectortileTerraintilesGetQueryParams withClientInfoApplicationId(String clientInfoApplicationId) {
        this.clientInfoApplicationId = clientInfoApplicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.applicationVersion")
    public String clientInfoApplicationVersion;
    public VectortileTerraintilesGetQueryParams withClientInfoApplicationVersion(String clientInfoApplicationVersion) {
        this.clientInfoApplicationVersion = clientInfoApplicationVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.deviceModel")
    public String clientInfoDeviceModel;
    public VectortileTerraintilesGetQueryParams withClientInfoDeviceModel(String clientInfoDeviceModel) {
        this.clientInfoDeviceModel = clientInfoDeviceModel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.operatingSystem")
    public String clientInfoOperatingSystem;
    public VectortileTerraintilesGetQueryParams withClientInfoOperatingSystem(String clientInfoOperatingSystem) {
        this.clientInfoOperatingSystem = clientInfoOperatingSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.platform")
    public VectortileTerraintilesGetClientInfoPlatformEnum clientInfoPlatform;
    public VectortileTerraintilesGetQueryParams withClientInfoPlatform(VectortileTerraintilesGetClientInfoPlatformEnum clientInfoPlatform) {
        this.clientInfoPlatform = clientInfoPlatform;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientInfo.userId")
    public String clientInfoUserId;
    public VectortileTerraintilesGetQueryParams withClientInfoUserId(String clientInfoUserId) {
        this.clientInfoUserId = clientInfoUserId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enableModeledVolumes")
    public Boolean enableModeledVolumes;
    public VectortileTerraintilesGetQueryParams withEnableModeledVolumes(Boolean enableModeledVolumes) {
        this.enableModeledVolumes = enableModeledVolumes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enablePoliticalFeatures")
    public Boolean enablePoliticalFeatures;
    public VectortileTerraintilesGetQueryParams withEnablePoliticalFeatures(Boolean enablePoliticalFeatures) {
        this.enablePoliticalFeatures = enablePoliticalFeatures;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enablePrivateRoads")
    public Boolean enablePrivateRoads;
    public VectortileTerraintilesGetQueryParams withEnablePrivateRoads(Boolean enablePrivateRoads) {
        this.enablePrivateRoads = enablePrivateRoads;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enableUnclippedBuildings")
    public Boolean enableUnclippedBuildings;
    public VectortileTerraintilesGetQueryParams withEnableUnclippedBuildings(Boolean enableUnclippedBuildings) {
        this.enableUnclippedBuildings = enableUnclippedBuildings;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public VectortileTerraintilesGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public VectortileTerraintilesGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languageCode")
    public String languageCode;
    public VectortileTerraintilesGetQueryParams withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxElevationResolutionCells")
    public Long maxElevationResolutionCells;
    public VectortileTerraintilesGetQueryParams withMaxElevationResolutionCells(Long maxElevationResolutionCells) {
        this.maxElevationResolutionCells = maxElevationResolutionCells;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minElevationResolutionCells")
    public Long minElevationResolutionCells;
    public VectortileTerraintilesGetQueryParams withMinElevationResolutionCells(Long minElevationResolutionCells) {
        this.minElevationResolutionCells = minElevationResolutionCells;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public VectortileTerraintilesGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public VectortileTerraintilesGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public VectortileTerraintilesGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=regionCode")
    public String regionCode;
    public VectortileTerraintilesGetQueryParams withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=terrainFormats")
    public VectortileTerraintilesGetTerrainFormatsEnum[] terrainFormats;
    public VectortileTerraintilesGetQueryParams withTerrainFormats(VectortileTerraintilesGetTerrainFormatsEnum[] terrainFormats) {
        this.terrainFormats = terrainFormats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public VectortileTerraintilesGetQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public VectortileTerraintilesGetQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
}