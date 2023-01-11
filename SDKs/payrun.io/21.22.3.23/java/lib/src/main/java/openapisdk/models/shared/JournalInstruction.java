package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JournalInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JournalInstruction")
    public JournalInstructionJournalInstruction journalInstruction;
    public JournalInstruction withJournalInstruction(JournalInstructionJournalInstruction journalInstruction) {
        this.journalInstruction = journalInstruction;
        return this;
    }
}