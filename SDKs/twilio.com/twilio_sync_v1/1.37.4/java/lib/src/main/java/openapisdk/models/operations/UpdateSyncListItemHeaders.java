package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncListItemHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public UpdateSyncListItemHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}