package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordProfitLossSectionModel
 * Class for a group of entries.
**/
public class LandlordProfitLossSectionModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rows")
    public LandlordProfitLossRowModel[] rows;
    public LandlordProfitLossSectionModel withRows(LandlordProfitLossRowModel[] rows) {
        this.rows = rows;
        return this;
    }
}