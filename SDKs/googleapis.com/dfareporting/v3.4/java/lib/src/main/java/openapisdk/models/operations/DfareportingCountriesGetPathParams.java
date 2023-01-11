package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingCountriesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dartId")
    public String dartId;
    public DfareportingCountriesGetPathParams withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingCountriesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}