package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GaDataDataTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cols")
    public GaDataDataTableCols[] cols;
    public GaDataDataTable withCols(GaDataDataTableCols[] cols) {
        this.cols = cols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public GaDataDataTableRows[] rows;
    public GaDataDataTable withRows(GaDataDataTableRows[] rows) {
        this.rows = rows;
        return this;
    }
}