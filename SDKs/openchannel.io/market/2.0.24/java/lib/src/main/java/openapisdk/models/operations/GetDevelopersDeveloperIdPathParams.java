package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevelopersDeveloperIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerId")
    public String developerId;
    public GetDevelopersDeveloperIdPathParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}