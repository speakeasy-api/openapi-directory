package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ReportResponse data;
    public ReportSuccess withData(ReportResponse data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msg")
    public String msg;
    public ReportSuccess withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public String success;
    public ReportSuccess withSuccess(String success) {
        this.success = success;
        return this;
    }
}