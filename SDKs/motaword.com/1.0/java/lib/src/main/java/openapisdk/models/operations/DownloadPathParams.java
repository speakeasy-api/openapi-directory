package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DownloadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}