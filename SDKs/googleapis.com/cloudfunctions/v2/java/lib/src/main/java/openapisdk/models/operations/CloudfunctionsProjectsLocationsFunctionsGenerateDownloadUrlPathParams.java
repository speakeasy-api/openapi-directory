package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudfunctionsProjectsLocationsFunctionsGenerateDownloadUrlPathParams withName(String name) {
        this.name = name;
        return this;
    }
}