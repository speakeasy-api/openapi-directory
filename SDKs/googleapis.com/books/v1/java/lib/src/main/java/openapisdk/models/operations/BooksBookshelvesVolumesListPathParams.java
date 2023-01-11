package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksBookshelvesVolumesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shelf")
    public String shelf;
    public BooksBookshelvesVolumesListPathParams withShelf(String shelf) {
        this.shelf = shelf;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BooksBookshelvesVolumesListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}