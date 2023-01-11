package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JournalLineJournalLineEmployee
 * The journal lines' employee
**/
public class JournalLineJournalLineEmployee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public JournalLineJournalLineEmployee withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public JournalLineJournalLineEmployee withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public JournalLineJournalLineEmployee withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}