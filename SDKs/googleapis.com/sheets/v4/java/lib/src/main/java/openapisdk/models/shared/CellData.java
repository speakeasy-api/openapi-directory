package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CellData
 * Data about a specific cell.
**/
public class CellData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceFormula")
    public DataSourceFormula dataSourceFormula;
    public CellData withDataSourceFormula(DataSourceFormula dataSourceFormula) {
        this.dataSourceFormula = dataSourceFormula;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceTable")
    public DataSourceTable dataSourceTable;
    public CellData withDataSourceTable(DataSourceTable dataSourceTable) {
        this.dataSourceTable = dataSourceTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataValidation")
    public DataValidationRule dataValidation;
    public CellData withDataValidation(DataValidationRule dataValidation) {
        this.dataValidation = dataValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveFormat")
    public CellFormat effectiveFormat;
    public CellData withEffectiveFormat(CellFormat effectiveFormat) {
        this.effectiveFormat = effectiveFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveValue")
    public ExtendedValue effectiveValue;
    public CellData withEffectiveValue(ExtendedValue effectiveValue) {
        this.effectiveValue = effectiveValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formattedValue")
    public String formattedValue;
    public CellData withFormattedValue(String formattedValue) {
        this.formattedValue = formattedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperlink")
    public String hyperlink;
    public CellData withHyperlink(String hyperlink) {
        this.hyperlink = hyperlink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public CellData withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotTable")
    public PivotTable pivotTable;
    public CellData withPivotTable(PivotTable pivotTable) {
        this.pivotTable = pivotTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textFormatRuns")
    public TextFormatRun[] textFormatRuns;
    public CellData withTextFormatRuns(TextFormatRun[] textFormatRuns) {
        this.textFormatRuns = textFormatRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEnteredFormat")
    public CellFormat userEnteredFormat;
    public CellData withUserEnteredFormat(CellFormat userEnteredFormat) {
        this.userEnteredFormat = userEnteredFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEnteredValue")
    public ExtendedValue userEnteredValue;
    public CellData withUserEnteredValue(ExtendedValue userEnteredValue) {
        this.userEnteredValue = userEnteredValue;
        return this;
    }
}