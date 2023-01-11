package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportMediaDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudsupportMediaDownloadPathParams withName(String name) {
        this.name = name;
        return this;
    }
}