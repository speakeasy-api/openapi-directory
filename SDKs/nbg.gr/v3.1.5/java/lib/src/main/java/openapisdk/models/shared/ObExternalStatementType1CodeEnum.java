package openapisdk.models.shared;


public enum ObExternalStatementType1CodeEnum {
    ACCOUNT_CLOSURE("AccountClosure"),
    ACCOUNT_OPENING("AccountOpening"),
    ANNUAL("Annual"),
    INTERIM("Interim"),
    REGULAR_PERIODIC("RegularPeriodic");

    public final String value;

    private ObExternalStatementType1CodeEnum(String value) {
        this.value = value;
    }
}
