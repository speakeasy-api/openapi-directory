package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdStatementsStatementIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountsAccountIdStatementsStatementIdPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=statementId")
    public String statementId;
    public GetAccountsAccountIdStatementsStatementIdPathParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}