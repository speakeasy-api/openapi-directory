package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromBookingDateTime")
    public OffsetDateTime fromBookingDateTime;
    public GetAccountsAccountIdTransactionsQueryParams withFromBookingDateTime(OffsetDateTime fromBookingDateTime) {
        this.fromBookingDateTime = fromBookingDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toBookingDateTime")
    public OffsetDateTime toBookingDateTime;
    public GetAccountsAccountIdTransactionsQueryParams withToBookingDateTime(OffsetDateTime toBookingDateTime) {
        this.toBookingDateTime = toBookingDateTime;
        return this;
    }
}