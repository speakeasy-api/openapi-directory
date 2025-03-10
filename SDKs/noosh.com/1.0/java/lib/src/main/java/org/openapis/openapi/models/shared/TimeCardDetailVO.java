/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;

/**
 * TimeCardDetailVO - Java type: com.noosh.nooshapi.vo.TimeCardDetailVO
 */
public class TimeCardDetailVO {
    /**
     * Java type: java.math.BigDecimal
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billable_hours")
    public Object billableHours;

    public TimeCardDetailVO withBillableHours(Object billableHours) {
        this.billableHours = billableHours;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_submit")
    public Boolean isSubmit;

    public TimeCardDetailVO withIsSubmit(Boolean isSubmit) {
        this.isSubmit = isSubmit;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("last_updated_date")
    public LocalDate lastUpdatedDate;

    public TimeCardDetailVO withLastUpdatedDate(LocalDate lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no_of_workdays")
    public Integer noOfWorkdays;

    public TimeCardDetailVO withNoOfWorkdays(Integer noOfWorkdays) {
        this.noOfWorkdays = noOfWorkdays;
        return this;
    }
    
    /**
     * Java type: java.math.BigDecimal
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonbillable_hours")
    public Object nonbillableHours;

    public TimeCardDetailVO withNonbillableHours(Object nonbillableHours) {
        this.nonbillableHours = nonbillableHours;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("submit_date")
    public LocalDate submitDate;

    public TimeCardDetailVO withSubmitDate(LocalDate submitDate) {
        this.submitDate = submitDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_card_line")
    public TimeCardLineVO[] timeCardLine;

    public TimeCardDetailVO withTimeCardLine(TimeCardLineVO[] timeCardLine) {
        this.timeCardLine = timeCardLine;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timecard_id")
    public Long timecardId;

    public TimeCardDetailVO withTimecardId(Long timecardId) {
        this.timecardId = timecardId;
        return this;
    }
    
    /**
     * Java type: java.math.BigDecimal
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_hours")
    public Object totalHours;

    public TimeCardDetailVO withTotalHours(Object totalHours) {
        this.totalHours = totalHours;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("week_beginning")
    public LocalDate weekBeginning;

    public TimeCardDetailVO withWeekBeginning(LocalDate weekBeginning) {
        this.weekBeginning = weekBeginning;
        return this;
    }
    
    public TimeCardDetailVO(){}
}
