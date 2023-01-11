package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ExportTransactionsCsvv4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public ExportTransactionsCsvv4QueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public ExportTransactionsCsvv4IncludeEnum include;
    public ExportTransactionsCsvv4QueryParams withInclude(ExportTransactionsCsvv4IncludeEnum include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ExportTransactionsCsvv4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public ExportTransactionsCsvv4QueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}