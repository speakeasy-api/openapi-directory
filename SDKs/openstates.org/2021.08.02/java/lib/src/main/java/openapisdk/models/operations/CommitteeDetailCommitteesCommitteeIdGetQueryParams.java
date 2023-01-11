package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommitteeDetailCommitteesCommitteeIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public CommitteeDetailCommitteesCommitteeIdGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.CommitteeIncludeEnum[] include;
    public CommitteeDetailCommitteesCommitteeIdGetQueryParams withInclude(openapisdk.models.shared.CommitteeIncludeEnum[] include) {
        this.include = include;
        return this;
    }
}