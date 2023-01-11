package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeveloperAccountsDeveloperAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerAccountId")
    public String developerAccountId;
    public PostDeveloperAccountsDeveloperAccountIdPathParams withDeveloperAccountId(String developerAccountId) {
        this.developerAccountId = developerAccountId;
        return this;
    }
}