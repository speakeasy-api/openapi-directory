package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCombinedAudiencesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=combinedAudienceId")
    public String combinedAudienceId;
    public DisplayvideoCombinedAudiencesGetPathParams withCombinedAudienceId(String combinedAudienceId) {
        this.combinedAudienceId = combinedAudienceId;
        return this;
    }
}