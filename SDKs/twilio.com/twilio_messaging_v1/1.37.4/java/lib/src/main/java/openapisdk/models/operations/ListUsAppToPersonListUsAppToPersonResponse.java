package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsAppToPersonListUsAppToPersonResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compliance")
    public openapisdk.models.shared.MessagingV1ServiceUsAppToPerson[] compliance;
    public ListUsAppToPersonListUsAppToPersonResponse withCompliance(openapisdk.models.shared.MessagingV1ServiceUsAppToPerson[] compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUsAppToPersonListUsAppToPersonResponseMeta meta;
    public ListUsAppToPersonListUsAppToPersonResponse withMeta(ListUsAppToPersonListUsAppToPersonResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}