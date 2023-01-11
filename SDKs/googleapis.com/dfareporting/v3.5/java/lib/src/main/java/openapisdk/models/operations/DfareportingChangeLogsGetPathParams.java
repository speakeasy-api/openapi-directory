package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingChangeLogsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DfareportingChangeLogsGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingChangeLogsGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}