package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public FetchRecordingPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}