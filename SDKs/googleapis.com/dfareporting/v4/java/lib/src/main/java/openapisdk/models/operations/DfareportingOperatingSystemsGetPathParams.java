package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingOperatingSystemsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dartId")
    public String dartId;
    public DfareportingOperatingSystemsGetPathParams withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingOperatingSystemsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}