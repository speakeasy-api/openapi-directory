package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LandlordControllerGetTenancyAgreementReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public LandlordControllerGetTenancyAgreementReportPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}