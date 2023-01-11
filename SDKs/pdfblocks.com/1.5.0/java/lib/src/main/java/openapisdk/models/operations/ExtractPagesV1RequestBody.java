package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtractPagesV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public ExtractPagesV1RequestBodyFile file;
    public ExtractPagesV1RequestBody withFile(ExtractPagesV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=first_page")
    public Integer firstPage;
    public ExtractPagesV1RequestBody withFirstPage(Integer firstPage) {
        this.firstPage = firstPage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=last_page")
    public Integer lastPage;
    public ExtractPagesV1RequestBody withLastPage(Integer lastPage) {
        this.lastPage = lastPage;
        return this;
    }
}