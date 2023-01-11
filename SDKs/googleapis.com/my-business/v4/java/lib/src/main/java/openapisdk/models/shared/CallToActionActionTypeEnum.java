package openapisdk.models.shared;


public enum CallToActionActionTypeEnum {
    ACTION_TYPE_UNSPECIFIED("ACTION_TYPE_UNSPECIFIED"),
    BOOK("BOOK"),
    ORDER("ORDER"),
    SHOP("SHOP"),
    LEARN_MORE("LEARN_MORE"),
    SIGN_UP("SIGN_UP"),
    GET_OFFER("GET_OFFER"),
    CALL("CALL");

    public final String value;

    private CallToActionActionTypeEnum(String value) {
        this.value = value;
    }
}
