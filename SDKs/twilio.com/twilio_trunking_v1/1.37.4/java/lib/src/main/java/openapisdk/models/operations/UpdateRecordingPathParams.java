package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecordingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TrunkSid")
    public String trunkSid;
    public UpdateRecordingPathParams withTrunkSid(String trunkSid) {
        this.trunkSid = trunkSid;
        return this;
    }
}