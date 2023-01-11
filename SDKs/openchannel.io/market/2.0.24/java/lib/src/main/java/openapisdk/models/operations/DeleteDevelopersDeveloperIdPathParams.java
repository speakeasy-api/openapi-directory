package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDevelopersDeveloperIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public DeleteDevelopersDeveloperIdPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}