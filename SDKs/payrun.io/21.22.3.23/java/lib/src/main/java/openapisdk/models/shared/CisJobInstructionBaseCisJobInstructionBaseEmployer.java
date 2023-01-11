package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CisJobInstructionBaseCisJobInstructionBaseEmployer
 * The cis job instruction bases' employer
**/
public class CisJobInstructionBaseCisJobInstructionBaseEmployer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public CisJobInstructionBaseCisJobInstructionBaseEmployer withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public CisJobInstructionBaseCisJobInstructionBaseEmployer withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public CisJobInstructionBaseCisJobInstructionBaseEmployer withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}