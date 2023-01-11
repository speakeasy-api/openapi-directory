package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IncomeVerificationDocumentsDownloadRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IncomeVerificationDocumentsDownloadRequest request;
    public IncomeVerificationDocumentsDownloadRequest withRequest(openapisdk.models.shared.IncomeVerificationDocumentsDownloadRequest request) {
        this.request = request;
        return this;
    }
}