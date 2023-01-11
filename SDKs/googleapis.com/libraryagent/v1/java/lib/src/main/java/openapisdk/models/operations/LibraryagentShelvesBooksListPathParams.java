package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LibraryagentShelvesBooksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public LibraryagentShelvesBooksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}