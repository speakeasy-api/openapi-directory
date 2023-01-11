package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSyncMapItemHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public UpdateSyncMapItemHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}