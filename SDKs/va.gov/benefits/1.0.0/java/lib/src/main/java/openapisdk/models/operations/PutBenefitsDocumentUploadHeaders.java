package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBenefitsDocumentUploadHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-MD5")
    public String contentMd5;
    public PutBenefitsDocumentUploadHeaders withContentMd5(String contentMd5) {
        this.contentMd5 = contentMd5;
        return this;
    }
}