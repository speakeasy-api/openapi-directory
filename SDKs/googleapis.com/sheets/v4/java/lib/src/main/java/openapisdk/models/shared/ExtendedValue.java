package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedValue
 * The kinds of value that a cell in a spreadsheet can have.
**/
public class ExtendedValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolValue")
    public Boolean boolValue;
    public ExtendedValue withBoolValue(Boolean boolValue) {
        this.boolValue = boolValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorValue")
    public ErrorValue errorValue;
    public ExtendedValue withErrorValue(ErrorValue errorValue) {
        this.errorValue = errorValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formulaValue")
    public String formulaValue;
    public ExtendedValue withFormulaValue(String formulaValue) {
        this.formulaValue = formulaValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberValue")
    public Double numberValue;
    public ExtendedValue withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public ExtendedValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}