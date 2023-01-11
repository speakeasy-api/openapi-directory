package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportData
 * The data part of the report.
**/
public class ReportData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLastRefreshed")
    public String dataLastRefreshed;
    public ReportData withDataLastRefreshed(String dataLastRefreshed) {
        this.dataLastRefreshed = dataLastRefreshed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emptyReason")
    public String emptyReason;
    public ReportData withEmptyReason(String emptyReason) {
        this.emptyReason = emptyReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDataGolden")
    public Boolean isDataGolden;
    public ReportData withIsDataGolden(Boolean isDataGolden) {
        this.isDataGolden = isDataGolden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximums")
    public DateRangeValues[] maximums;
    public ReportData withMaximums(DateRangeValues[] maximums) {
        this.maximums = maximums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimums")
    public DateRangeValues[] minimums;
    public ReportData withMinimums(DateRangeValues[] minimums) {
        this.minimums = minimums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public ReportData withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public ReportRow[] rows;
    public ReportData withRows(ReportRow[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplesReadCounts")
    public String[] samplesReadCounts;
    public ReportData withSamplesReadCounts(String[] samplesReadCounts) {
        this.samplesReadCounts = samplesReadCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingSpaceSizes")
    public String[] samplingSpaceSizes;
    public ReportData withSamplingSpaceSizes(String[] samplingSpaceSizes) {
        this.samplingSpaceSizes = samplingSpaceSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totals")
    public DateRangeValues[] totals;
    public ReportData withTotals(DateRangeValues[] totals) {
        this.totals = totals;
        return this;
    }
}