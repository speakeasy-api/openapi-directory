package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlOutOfDiskReport
 * This message wraps up the information written by out-of-disk detection job.
**/
public class SqlOutOfDiskReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlMinRecommendedIncreaseSizeGb")
    public Integer sqlMinRecommendedIncreaseSizeGb;
    public SqlOutOfDiskReport withSqlMinRecommendedIncreaseSizeGb(Integer sqlMinRecommendedIncreaseSizeGb) {
        this.sqlMinRecommendedIncreaseSizeGb = sqlMinRecommendedIncreaseSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlOutOfDiskState")
    public SqlOutOfDiskReportSqlOutOfDiskStateEnum sqlOutOfDiskState;
    public SqlOutOfDiskReport withSqlOutOfDiskState(SqlOutOfDiskReportSqlOutOfDiskStateEnum sqlOutOfDiskState) {
        this.sqlOutOfDiskState = sqlOutOfDiskState;
        return this;
    }
}