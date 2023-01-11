package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadVideosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DownloadVideosPathParams withId(String id) {
        this.id = id;
        return this;
    }
}