package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingVideoFormatsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DfareportingVideoFormatsGetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingVideoFormatsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}