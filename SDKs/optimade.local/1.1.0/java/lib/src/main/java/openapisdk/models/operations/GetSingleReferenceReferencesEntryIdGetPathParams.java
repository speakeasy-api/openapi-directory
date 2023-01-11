package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSingleReferenceReferencesEntryIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entry_id")
    public String entryId;
    public GetSingleReferenceReferencesEntryIdGetPathParams withEntryId(String entryId) {
        this.entryId = entryId;
        return this;
    }
}