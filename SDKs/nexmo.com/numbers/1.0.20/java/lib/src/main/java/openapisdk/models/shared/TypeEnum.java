package openapisdk.models.shared;


public enum TypeEnum {
    LANDLINE("landline"),
    MOBILE_LVN("mobile-lvn"),
    LANDLINE_TOLL_FREE("landline-toll-free");

    public final String value;

    private TypeEnum(String value) {
        this.value = value;
    }
}
