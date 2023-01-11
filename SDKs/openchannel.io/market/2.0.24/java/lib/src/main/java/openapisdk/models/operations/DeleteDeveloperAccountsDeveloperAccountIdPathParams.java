package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeveloperAccountsDeveloperAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerAccountId")
    public String developerAccountId;
    public DeleteDeveloperAccountsDeveloperAccountIdPathParams withDeveloperAccountId(String developerAccountId) {
        this.developerAccountId = developerAccountId;
        return this;
    }
}