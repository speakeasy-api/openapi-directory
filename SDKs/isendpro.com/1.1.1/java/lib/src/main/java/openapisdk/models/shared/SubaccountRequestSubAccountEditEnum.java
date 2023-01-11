package openapisdk.models.shared;


public enum SubaccountRequestSubAccountEditEnum {
    SET_PRICE("setPrice"),
    ADD_CREDIT("addCredit"),
    SET_RESTRICTION("setRestriction");

    public final String value;

    private SubaccountRequestSubAccountEditEnum(String value) {
        this.value = value;
    }
}
