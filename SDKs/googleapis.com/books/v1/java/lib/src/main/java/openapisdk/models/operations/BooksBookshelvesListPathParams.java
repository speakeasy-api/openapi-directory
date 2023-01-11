package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksBookshelvesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public BooksBookshelvesListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}