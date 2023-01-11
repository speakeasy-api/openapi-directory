package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JournalLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JournalLine")
    public JournalLineJournalLine journalLine;
    public JournalLine withJournalLine(JournalLineJournalLine journalLine) {
        this.journalLine = journalLine;
        return this;
    }
}