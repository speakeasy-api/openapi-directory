package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CompaniesRegionsIdRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.RegionUpdateModel regionUpdateModel;
    public PutSetupV1CompaniesRegionsIdRequests withRegionUpdateModel(openapisdk.models.shared.RegionUpdateModel regionUpdateModel) {
        this.regionUpdateModel = regionUpdateModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegionUpdateModel regionUpdateModel1;
    public PutSetupV1CompaniesRegionsIdRequests withRegionUpdateModel1(openapisdk.models.shared.RegionUpdateModel regionUpdateModel1) {
        this.regionUpdateModel1 = regionUpdateModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.RegionUpdateModel regionUpdateModel2;
    public PutSetupV1CompaniesRegionsIdRequests withRegionUpdateModel2(openapisdk.models.shared.RegionUpdateModel regionUpdateModel2) {
        this.regionUpdateModel2 = regionUpdateModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.RegionUpdateModel regionUpdateModel3;
    public PutSetupV1CompaniesRegionsIdRequests withRegionUpdateModel3(openapisdk.models.shared.RegionUpdateModel regionUpdateModel3) {
        this.regionUpdateModel3 = regionUpdateModel3;
        return this;
    }
}