package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInformationContentResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=evidence")
    public String evidence;
    public GetInformationContentResourceQueryParams withEvidence(String evidence) {
        this.evidence = evidence;
        return this;
    }
}