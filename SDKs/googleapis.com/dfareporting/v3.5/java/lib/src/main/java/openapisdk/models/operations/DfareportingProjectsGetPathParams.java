package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingProjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingProjectsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingProjectsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}