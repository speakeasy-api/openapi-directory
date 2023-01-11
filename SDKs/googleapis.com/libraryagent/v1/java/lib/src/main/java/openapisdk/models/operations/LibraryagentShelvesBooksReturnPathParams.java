package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LibraryagentShelvesBooksReturnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public LibraryagentShelvesBooksReturnPathParams withName(String name) {
        this.name = name;
        return this;
    }
}