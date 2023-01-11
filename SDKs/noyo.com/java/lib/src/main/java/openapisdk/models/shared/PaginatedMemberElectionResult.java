package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedMemberElectionResult {
    @JsonProperty("meta")
    public PaginatedMemberElectionResultMeta meta;
    public PaginatedMemberElectionResult withMeta(PaginatedMemberElectionResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public MemberElectionResult[] response;
    public PaginatedMemberElectionResult withResponse(MemberElectionResult[] response) {
        this.response = response;
        return this;
    }
}