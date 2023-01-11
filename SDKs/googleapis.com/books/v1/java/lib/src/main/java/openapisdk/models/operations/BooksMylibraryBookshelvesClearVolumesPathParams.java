package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryBookshelvesClearVolumesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksMylibraryBookshelvesClearVolumesPathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
}