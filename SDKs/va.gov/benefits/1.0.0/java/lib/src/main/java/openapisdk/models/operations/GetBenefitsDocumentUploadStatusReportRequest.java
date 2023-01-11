package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBenefitsDocumentUploadStatusReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DocumentUploadStatusGuidList request;
    public GetBenefitsDocumentUploadStatusReportRequest withRequest(openapisdk.models.shared.DocumentUploadStatusGuidList request) {
        this.request = request;
        return this;
    }
    public GetBenefitsDocumentUploadStatusReportSecurity security;
    public GetBenefitsDocumentUploadStatusReportRequest withSecurity(GetBenefitsDocumentUploadStatusReportSecurity security) {
        this.security = security;
        return this;
    }
}