package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1CompaniesRegionsRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.RegionInputModel regionInputModel;
    public PostSetupV1CompaniesRegionsRequests withRegionInputModel(openapisdk.models.shared.RegionInputModel regionInputModel) {
        this.regionInputModel = regionInputModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegionInputModel regionInputModel1;
    public PostSetupV1CompaniesRegionsRequests withRegionInputModel1(openapisdk.models.shared.RegionInputModel regionInputModel1) {
        this.regionInputModel1 = regionInputModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.RegionInputModel regionInputModel2;
    public PostSetupV1CompaniesRegionsRequests withRegionInputModel2(openapisdk.models.shared.RegionInputModel regionInputModel2) {
        this.regionInputModel2 = regionInputModel2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.RegionInputModel regionInputModel3;
    public PostSetupV1CompaniesRegionsRequests withRegionInputModel3(openapisdk.models.shared.RegionInputModel regionInputModel3) {
        this.regionInputModel3 = regionInputModel3;
        return this;
    }
}