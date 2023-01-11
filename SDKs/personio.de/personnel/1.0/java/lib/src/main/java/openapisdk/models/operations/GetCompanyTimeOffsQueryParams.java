package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetCompanyTimeOffsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=employees")
    public Long[] employees;
    public GetCompanyTimeOffsQueryParams withEmployees(Long[] employees) {
        this.employees = employees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public LocalDate endDate;
    public GetCompanyTimeOffsQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetCompanyTimeOffsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetCompanyTimeOffsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public LocalDate startDate;
    public GetCompanyTimeOffsQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_from")
    public String updatedFrom;
    public GetCompanyTimeOffsQueryParams withUpdatedFrom(String updatedFrom) {
        this.updatedFrom = updatedFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_to")
    public String updatedTo;
    public GetCompanyTimeOffsQueryParams withUpdatedTo(String updatedTo) {
        this.updatedTo = updatedTo;
        return this;
    }
}