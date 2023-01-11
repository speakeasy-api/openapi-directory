package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingChangeLogsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingChangeLogsListPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}