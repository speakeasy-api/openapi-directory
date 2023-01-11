package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommitteeDetailCommitteesCommitteeIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=committee_id")
    public String committeeId;
    public CommitteeDetailCommitteesCommitteeIdGetPathParams withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
}