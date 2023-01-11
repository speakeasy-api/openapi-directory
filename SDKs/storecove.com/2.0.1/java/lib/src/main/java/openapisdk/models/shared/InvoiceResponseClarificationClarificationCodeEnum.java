package openapisdk.models.shared;


public enum InvoiceResponseClarificationClarificationCodeEnum {
    REF("REF"),
    LEG("LEG"),
    REC("REC"),
    QUA("QUA"),
    DEL("DEL"),
    PRI("PRI"),
    QTY("QTY"),
    ITM("ITM"),
    PAY("PAY"),
    UNR("UNR"),
    FIN("FIN"),
    OTH("OTH"),
    PIN("PIN"),
    NIN("NIN"),
    CNF("CNF"),
    CNP("CNP"),
    CNA("CNA");

    public final String value;

    private InvoiceResponseClarificationClarificationCodeEnum(String value) {
        this.value = value;
    }
}
