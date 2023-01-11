package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetHolidayBalanceReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeCodes")
    public String employeeCodes;
    public GetHolidayBalanceReportOutputQueryParams withEmployeeCodes(String employeeCodes) {
        this.employeeCodes = employeeCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetHolidayBalanceReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HolidayYearEnd")
    public LocalDate holidayYearEnd;
    public GetHolidayBalanceReportOutputQueryParams withHolidayYearEnd(LocalDate holidayYearEnd) {
        this.holidayYearEnd = holidayYearEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetHolidayBalanceReportOutputQueryParams withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetHolidayBalanceReportOutputQueryParams withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}