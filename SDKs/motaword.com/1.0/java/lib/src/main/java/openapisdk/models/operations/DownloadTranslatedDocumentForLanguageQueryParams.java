package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadTranslatedDocumentForLanguageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=certified")
    public Boolean certified;
    public DownloadTranslatedDocumentForLanguageQueryParams withCertified(Boolean certified) {
        this.certified = certified;
        return this;
    }
}