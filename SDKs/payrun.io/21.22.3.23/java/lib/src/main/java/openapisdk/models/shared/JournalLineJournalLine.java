package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class JournalLineJournalLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credit")
    public Double credit;
    public JournalLineJournalLine withCredit(Double credit) {
        this.credit = credit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debit")
    public Double debit;
    public JournalLineJournalLine withDebit(Double debit) {
        this.debit = debit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public JournalLineJournalLine withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employee")
    public JournalLineJournalLineEmployee employee;
    public JournalLineJournalLine withEmployee(JournalLineJournalLineEmployee employee) {
        this.employee = employee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Generated")
    public OffsetDateTime generated;
    public JournalLineJournalLine withGenerated(OffsetDateTime generated) {
        this.generated = generated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Grouping")
    public String grouping;
    public JournalLineJournalLine withGrouping(String grouping) {
        this.grouping = grouping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LedgerTarget")
    public String ledgerTarget;
    public JournalLineJournalLine withLedgerTarget(String ledgerTarget) {
        this.ledgerTarget = ledgerTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NomCode")
    public String nomCode;
    public JournalLineJournalLine withNomCode(String nomCode) {
        this.nomCode = nomCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayFrequency")
    public JournalLineJournalLinePayFrequencyEnum payFrequency;
    public JournalLineJournalLine withPayFrequency(JournalLineJournalLinePayFrequencyEnum payFrequency) {
        this.payFrequency = payFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRun")
    public JournalLineJournalLinePayRun payRun;
    public JournalLineJournalLine withPayRun(JournalLineJournalLinePayRun payRun) {
        this.payRun = payRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubContractor")
    public JournalLineJournalLineSubContractor subContractor;
    public JournalLineJournalLine withSubContractor(JournalLineJournalLineSubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubNomCode")
    public String subNomCode;
    public JournalLineJournalLine withSubNomCode(String subNomCode) {
        this.subNomCode = subNomCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxPeriod")
    public Integer taxPeriod;
    public JournalLineJournalLine withTaxPeriod(Integer taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public JournalLineJournalLine withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
}