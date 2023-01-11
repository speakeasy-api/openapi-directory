package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDeveloperAccountsDeveloperAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerAccountId")
    public String developerAccountId;
    public PatchDeveloperAccountsDeveloperAccountIdPathParams withDeveloperAccountId(String developerAccountId) {
        this.developerAccountId = developerAccountId;
        return this;
    }
}