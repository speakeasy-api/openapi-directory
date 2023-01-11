package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public YoutubeCaptionsDownloadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}