package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingAccountActiveAdSummariesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;
    public DfareportingAccountActiveAdSummariesGetPathParams withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=summaryAccountId")
    public String summaryAccountId;
    public DfareportingAccountActiveAdSummariesGetPathParams withSummaryAccountId(String summaryAccountId) {
        this.summaryAccountId = summaryAccountId;
        return this;
    }
}