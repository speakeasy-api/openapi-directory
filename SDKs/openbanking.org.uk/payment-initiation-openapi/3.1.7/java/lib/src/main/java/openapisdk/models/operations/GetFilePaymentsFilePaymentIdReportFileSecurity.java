package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilePaymentsFilePaymentIdReportFileSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security;
    public GetFilePaymentsFilePaymentIdReportFileSecurity withTppoAuth2Security(openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security) {
        this.tppoAuth2Security = tppoAuth2Security;
        return this;
    }
}