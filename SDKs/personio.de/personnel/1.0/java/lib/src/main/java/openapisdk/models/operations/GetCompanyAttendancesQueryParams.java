package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCompanyAttendancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=employees")
    public Long[] employees;
    public GetCompanyAttendancesQueryParams withEmployees(Long[] employees) {
        this.employees = employees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public LocalDate endDate;
    public GetCompanyAttendancesQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetCompanyAttendancesQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetCompanyAttendancesQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public LocalDate startDate;
    public GetCompanyAttendancesQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_from")
    public String updatedFrom;
    public GetCompanyAttendancesQueryParams withUpdatedFrom(String updatedFrom) {
        this.updatedFrom = updatedFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_to")
    public String updatedTo;
    public GetCompanyAttendancesQueryParams withUpdatedTo(String updatedTo) {
        this.updatedTo = updatedTo;
        return this;
    }
}