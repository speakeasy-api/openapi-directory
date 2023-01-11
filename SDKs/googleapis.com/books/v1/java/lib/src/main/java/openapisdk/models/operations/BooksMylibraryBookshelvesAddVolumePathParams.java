package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryBookshelvesAddVolumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksMylibraryBookshelvesAddVolumePathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
}