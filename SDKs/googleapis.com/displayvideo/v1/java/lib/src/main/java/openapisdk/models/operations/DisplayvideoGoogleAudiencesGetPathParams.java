package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoGoogleAudiencesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=googleAudienceId")
    public String googleAudienceId;
    public DisplayvideoGoogleAudiencesGetPathParams withGoogleAudienceId(String googleAudienceId) {
        this.googleAudienceId = googleAudienceId;
        return this;
    }
}