package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bookingStatus")
    public openapisdk.models.shared.BookingStatusEnum bookingStatus;
    public GetTransactionListQueryParams withBookingStatus(openapisdk.models.shared.BookingStatusEnum bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFrom")
    public LocalDate dateFrom;
    public GetTransactionListQueryParams withDateFrom(LocalDate dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateTo")
    public LocalDate dateTo;
    public GetTransactionListQueryParams withDateTo(LocalDate dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deltaList")
    public Boolean deltaList;
    public GetTransactionListQueryParams withDeltaList(Boolean deltaList) {
        this.deltaList = deltaList;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entryReferenceFrom")
    public String entryReferenceFrom;
    public GetTransactionListQueryParams withEntryReferenceFrom(String entryReferenceFrom) {
        this.entryReferenceFrom = entryReferenceFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=withBalance")
    public Boolean withBalance;
    public GetTransactionListQueryParams withWithBalance(Boolean withBalance) {
        this.withBalance = withBalance;
        return this;
    }
}