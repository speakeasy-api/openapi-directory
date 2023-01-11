package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CisTransactionCisTransactionEmployerCore
 * The cis transactions' employer core
**/
public class CisTransactionCisTransactionEmployerCore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public CisTransactionCisTransactionEmployerCore withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public CisTransactionCisTransactionEmployerCore withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public CisTransactionCisTransactionEmployerCore withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}