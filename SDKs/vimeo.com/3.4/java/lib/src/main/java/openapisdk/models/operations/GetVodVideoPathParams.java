package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVodVideoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ondemand_id")
    public Double ondemandId;
    public GetVodVideoPathParams withOndemandId(Double ondemandId) {
        this.ondemandId = ondemandId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public GetVodVideoPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}