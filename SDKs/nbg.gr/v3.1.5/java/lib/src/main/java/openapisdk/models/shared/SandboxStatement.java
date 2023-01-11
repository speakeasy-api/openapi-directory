package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxStatement
 * Statement information
**/
public class SandboxStatement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Integer month;
    public SandboxStatement withMonth(Integer month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public SandboxStatement withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Integer year;
    public SandboxStatement withYear(Integer year) {
        this.year = year;
        return this;
    }
}