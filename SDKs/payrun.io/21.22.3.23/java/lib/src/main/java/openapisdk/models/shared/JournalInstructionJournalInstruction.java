package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JournalInstructionJournalInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountingType")
    public JournalInstructionJournalInstructionAccountingTypeEnum accountingType;
    public JournalInstructionJournalInstruction withAccountingType(JournalInstructionJournalInstructionAccountingTypeEnum accountingType) {
        this.accountingType = accountingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public JournalInstructionJournalInstruction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public LocalDate endDate;
    public JournalInstructionJournalInstruction withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expression")
    public String expression;
    public JournalInstructionJournalInstruction withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JournalLineTag")
    public String journalLineTag;
    public JournalInstructionJournalInstruction withJournalLineTag(String journalLineTag) {
        this.journalLineTag = journalLineTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LedgerTarget")
    public String ledgerTarget;
    public JournalInstructionJournalInstruction withLedgerTarget(String ledgerTarget) {
        this.ledgerTarget = ledgerTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NomCode")
    public String nomCode;
    public JournalInstructionJournalInstruction withNomCode(String nomCode) {
        this.nomCode = nomCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public LocalDate startDate;
    public JournalInstructionJournalInstruction withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubNomCode")
    public String subNomCode;
    public JournalInstructionJournalInstruction withSubNomCode(String subNomCode) {
        this.subNomCode = subNomCode;
        return this;
    }
}