package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryBookshelvesMoveVolumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksMylibraryBookshelvesMoveVolumePathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
}