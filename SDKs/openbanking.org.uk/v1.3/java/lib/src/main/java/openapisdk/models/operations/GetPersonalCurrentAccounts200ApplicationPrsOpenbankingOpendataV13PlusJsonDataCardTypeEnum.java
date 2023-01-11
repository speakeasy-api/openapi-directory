package openapisdk.models.operations;


public enum GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum {
    BASIC_CARD("BasicCard"),
    BUSINESS_QUICK_LODGE_CARD("BusinessQuickLodgeCard"),
    CASHCARD("Cashcard"),
    CONTACTLESS_CASHCARD("ContactlessCashcard"),
    CONTACTLESS_DEBIT_MASTERCARD("ContactlessDebitMastercard"),
    CONTACTLESS_DEBIT_VISA("ContactlessDebitVisa"),
    DEBIT_MASTERCARD("DebitMastercard"),
    VISA_DEBIT("VisaDebit"),
    DEPOSIT_CARD("DepositCard"),
    OPERATOR_CARD("OperatorCard"),
    POCA_CARD("POCACard");

    public final String value;

    private GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum(String value) {
        this.value = value;
    }
}
