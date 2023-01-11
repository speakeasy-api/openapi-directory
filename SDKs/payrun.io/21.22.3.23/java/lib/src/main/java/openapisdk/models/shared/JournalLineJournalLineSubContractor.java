package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JournalLineJournalLineSubContractor
 * The journal lines' sub contractor
**/
public class JournalLineJournalLineSubContractor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public JournalLineJournalLineSubContractor withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public JournalLineJournalLineSubContractor withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public JournalLineJournalLineSubContractor withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}