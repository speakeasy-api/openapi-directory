package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDevelopersDeveloperIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public PatchDevelopersDeveloperIdPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}