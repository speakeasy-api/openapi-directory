package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdStatementsStatementIdFilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountsAccountIdStatementsStatementIdFilePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=statementId")
    public String statementId;
    public GetAccountsAccountIdStatementsStatementIdFilePathParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}