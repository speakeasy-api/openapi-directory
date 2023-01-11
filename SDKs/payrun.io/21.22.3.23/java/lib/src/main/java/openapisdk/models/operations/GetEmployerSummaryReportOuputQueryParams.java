package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployerSummaryReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ContextDate")
    public LocalDate contextDate;
    public GetEmployerSummaryReportOuputQueryParams withContextDate(LocalDate contextDate) {
        this.contextDate = contextDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetEmployerSummaryReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
}