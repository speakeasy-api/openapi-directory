package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPrivacyDomainsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVideoPrivacyDomainsPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}