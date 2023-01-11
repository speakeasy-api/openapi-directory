package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDevelopersDeveloperIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public PostDevelopersDeveloperIdPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}