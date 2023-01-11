package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommitteeListCommitteesGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public CommitteeListCommitteesGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}