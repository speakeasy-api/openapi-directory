package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSingleStructureStructuresEntryIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entry_id")
    public String entryId;
    public GetSingleStructureStructuresEntryIdGetPathParams withEntryId(String entryId) {
        this.entryId = entryId;
        return this;
    }
}