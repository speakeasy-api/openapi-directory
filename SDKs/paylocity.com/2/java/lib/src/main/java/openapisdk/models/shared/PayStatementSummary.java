package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayStatementSummary
 * The pay statement summary model
**/
public class PayStatementSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoPay")
    public Boolean autoPay;
    public PayStatementSummary withAutoPay(Boolean autoPay) {
        this.autoPay = autoPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginDate")
    public String beginDate;
    public PayStatementSummary withBeginDate(String beginDate) {
        this.beginDate = beginDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkDate")
    public String checkDate;
    public PayStatementSummary withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkNumber")
    public Long checkNumber;
    public PayStatementSummary withCheckNumber(Long checkNumber) {
        this.checkNumber = checkNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDepositAmount")
    public Double directDepositAmount;
    public PayStatementSummary withDirectDepositAmount(Double directDepositAmount) {
        this.directDepositAmount = directDepositAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public PayStatementSummary withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grossPay")
    public Double grossPay;
    public PayStatementSummary withGrossPay(Double grossPay) {
        this.grossPay = grossPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours")
    public Double hours;
    public PayStatementSummary withHours(Double hours) {
        this.hours = hours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netCheck")
    public Double netCheck;
    public PayStatementSummary withNetCheck(Double netCheck) {
        this.netCheck = netCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netPay")
    public Double netPay;
    public PayStatementSummary withNetPay(Double netPay) {
        this.netPay = netPay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overtimeDollars")
    public Double overtimeDollars;
    public PayStatementSummary withOvertimeDollars(Double overtimeDollars) {
        this.overtimeDollars = overtimeDollars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overtimeHours")
    public Double overtimeHours;
    public PayStatementSummary withOvertimeHours(Double overtimeHours) {
        this.overtimeHours = overtimeHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("process")
    public Long process;
    public PayStatementSummary withProcess(Long process) {
        this.process = process;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularDollars")
    public Double regularDollars;
    public PayStatementSummary withRegularDollars(Double regularDollars) {
        this.regularDollars = regularDollars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularHours")
    public Double regularHours;
    public PayStatementSummary withRegularHours(Double regularHours) {
        this.regularHours = regularHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionNumber")
    public Long transactionNumber;
    public PayStatementSummary withTransactionNumber(Long transactionNumber) {
        this.transactionNumber = transactionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherNumber")
    public Long voucherNumber;
    public PayStatementSummary withVoucherNumber(Long voucherNumber) {
        this.voucherNumber = voucherNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workersCompCode")
    public String workersCompCode;
    public PayStatementSummary withWorkersCompCode(String workersCompCode) {
        this.workersCompCode = workersCompCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public PayStatementSummary withYear(Long year) {
        this.year = year;
        return this;
    }
}