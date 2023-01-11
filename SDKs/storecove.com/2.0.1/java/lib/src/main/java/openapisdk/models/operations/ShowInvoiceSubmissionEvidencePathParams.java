package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowInvoiceSubmissionEvidencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guid")
    public String guid;
    public ShowInvoiceSubmissionEvidencePathParams withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}