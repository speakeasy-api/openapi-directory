package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksBookshelvesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksBookshelvesGetPathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BooksBookshelvesGetPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}