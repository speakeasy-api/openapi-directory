package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=account_id")
    public String accountId;
    public ListReportsQueryParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public LocalDate dateFrom;
    public ListReportsQueryParams withDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public LocalDate dateTo;
    public ListReportsQueryParams withDateTo(LocalDate dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public ListReportsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}