package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMemberElectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_election_id")
    public String memberElectionId;
    public GetMemberElectionPathParams withMemberElectionId(String memberElectionId) {
        this.memberElectionId = memberElectionId;
        return this;
    }
}