package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePagesV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public RemovePagesV1RequestBodyFile file;
    public RemovePagesV1RequestBody withFile(RemovePagesV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_page")
    public Integer firstPage;
    public RemovePagesV1RequestBody withFirstPage(Integer firstPage) {
        this.firstPage = firstPage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_page")
    public Integer lastPage;
    public RemovePagesV1RequestBody withLastPage(Integer lastPage) {
        this.lastPage = lastPage;
        return this;
    }
}