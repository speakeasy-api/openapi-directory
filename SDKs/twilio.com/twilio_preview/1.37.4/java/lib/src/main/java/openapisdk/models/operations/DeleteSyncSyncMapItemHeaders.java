package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSyncSyncMapItemHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Match")
    public String ifMatch;
    public DeleteSyncSyncMapItemHeaders withIfMatch(String ifMatch) {
        this.ifMatch = ifMatch;
        return this;
    }
}