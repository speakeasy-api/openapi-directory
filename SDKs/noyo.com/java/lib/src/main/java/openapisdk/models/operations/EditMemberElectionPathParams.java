package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditMemberElectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=member_election_id")
    public String memberElectionId;
    public EditMemberElectionPathParams withMemberElectionId(String memberElectionId) {
        this.memberElectionId = memberElectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditMemberElectionPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}