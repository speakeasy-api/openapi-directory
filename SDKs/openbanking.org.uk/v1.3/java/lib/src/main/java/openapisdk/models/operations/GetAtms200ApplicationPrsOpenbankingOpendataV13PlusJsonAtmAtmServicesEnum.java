package openapisdk.models.operations;


public enum GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum {
    BALANCE("Balance"),
    BILL_PAYMENTS("BillPayments"),
    CASH_DEPOSITS("CashDeposits"),
    CASH_WITHDRAWAL("CashWithdrawal"),
    CHARITY_DONATION("CharityDonation"),
    CHEQUE_BOOK_REQUEST("ChequeBookRequest"),
    CHEQUE_DEPOSITS("ChequeDeposits"),
    FAST_CASH("FastCash"),
    MINI_STATEMENT("MiniStatement"),
    MOBILE_BANKING_REGISTRATION("MobileBankingRegistration"),
    MOBILE_PAYMENT_REGISTRATION("MobilePaymentRegistration"),
    MOBILE_PHONE_TOP_UP("MobilePhoneTopUp"),
    ORDER_STATEMENT("OrderStatement"),
    PIN_ACTIVATION("PINActivation"),
    PIN_CHANGE("PINChange");

    public final String value;

    private GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmAtmServicesEnum(String value) {
        this.value = value;
    }
}
