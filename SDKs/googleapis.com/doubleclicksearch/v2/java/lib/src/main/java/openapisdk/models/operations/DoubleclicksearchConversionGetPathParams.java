package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchConversionGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DoubleclicksearchConversionGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agencyId")
    public String agencyId;
    public DoubleclicksearchConversionGetPathParams withAgencyId(String agencyId) {
        this.agencyId = agencyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=engineAccountId")
    public String engineAccountId;
    public DoubleclicksearchConversionGetPathParams withEngineAccountId(String engineAccountId) {
        this.engineAccountId = engineAccountId;
        return this;
    }
}