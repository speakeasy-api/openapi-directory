package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryBookshelvesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksMylibraryBookshelvesGetPathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
}