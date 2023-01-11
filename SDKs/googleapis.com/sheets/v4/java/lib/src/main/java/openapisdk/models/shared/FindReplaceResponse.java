package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindReplaceResponse
 * The result of the find/replace.
**/
public class FindReplaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formulasChanged")
    public Integer formulasChanged;
    public FindReplaceResponse withFormulasChanged(Integer formulasChanged) {
        this.formulasChanged = formulasChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrencesChanged")
    public Integer occurrencesChanged;
    public FindReplaceResponse withOccurrencesChanged(Integer occurrencesChanged) {
        this.occurrencesChanged = occurrencesChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowsChanged")
    public Integer rowsChanged;
    public FindReplaceResponse withRowsChanged(Integer rowsChanged) {
        this.rowsChanged = rowsChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetsChanged")
    public Integer sheetsChanged;
    public FindReplaceResponse withSheetsChanged(Integer sheetsChanged) {
        this.sheetsChanged = sheetsChanged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuesChanged")
    public Integer valuesChanged;
    public FindReplaceResponse withValuesChanged(Integer valuesChanged) {
        this.valuesChanged = valuesChanged;
        return this;
    }
}