package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryBookshelvesRemoveVolumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksMylibraryBookshelvesRemoveVolumePathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
}