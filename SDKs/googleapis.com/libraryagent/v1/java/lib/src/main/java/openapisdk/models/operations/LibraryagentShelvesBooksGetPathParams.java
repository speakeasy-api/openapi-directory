package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LibraryagentShelvesBooksGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public LibraryagentShelvesBooksGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}