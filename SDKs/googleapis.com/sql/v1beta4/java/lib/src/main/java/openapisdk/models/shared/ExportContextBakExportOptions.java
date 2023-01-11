package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportContextBakExportOptions
 * Options for exporting BAK files (SQL Server-only)
**/
public class ExportContextBakExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stripeCount")
    public Integer stripeCount;
    public ExportContextBakExportOptions withStripeCount(Integer stripeCount) {
        this.stripeCount = stripeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("striped")
    public Boolean striped;
    public ExportContextBakExportOptions withStriped(Boolean striped) {
        this.striped = striped;
        return this;
    }
}