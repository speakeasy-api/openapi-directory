package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEntryInfoInfoEntryGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entry")
    public String entry;
    public GetEntryInfoInfoEntryGetPathParams withEntry(String entry) {
        this.entry = entry;
        return this;
    }
}