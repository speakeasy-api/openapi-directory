package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeveloperAccountsDeveloperAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=developerAccountId")
    public String developerAccountId;
    public GetDeveloperAccountsDeveloperAccountIdPathParams withDeveloperAccountId(String developerAccountId) {
        this.developerAccountId = developerAccountId;
        return this;
    }
}