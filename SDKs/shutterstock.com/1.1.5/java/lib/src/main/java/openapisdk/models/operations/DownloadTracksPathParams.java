package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DownloadTracksPathParams withId(String id) {
        this.id = id;
        return this;
    }
}