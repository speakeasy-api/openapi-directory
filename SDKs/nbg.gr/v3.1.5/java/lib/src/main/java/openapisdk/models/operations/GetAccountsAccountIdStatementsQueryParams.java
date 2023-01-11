package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdStatementsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromStatementDateTime")
    public OffsetDateTime fromStatementDateTime;
    public GetAccountsAccountIdStatementsQueryParams withFromStatementDateTime(OffsetDateTime fromStatementDateTime) {
        this.fromStatementDateTime = fromStatementDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toStatementDateTime")
    public OffsetDateTime toStatementDateTime;
    public GetAccountsAccountIdStatementsQueryParams withToStatementDateTime(OffsetDateTime toStatementDateTime) {
        this.toStatementDateTime = toStatementDateTime;
        return this;
    }
}