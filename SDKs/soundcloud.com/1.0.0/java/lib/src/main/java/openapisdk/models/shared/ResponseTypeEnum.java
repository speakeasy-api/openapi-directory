package openapisdk.models.shared;


public enum ResponseTypeEnum {
    CODE("code"),
    TOKEN("token"),
    CODE_AND_TOKEN("code_and_token");

    public final String value;

    private ResponseTypeEnum(String value) {
        this.value = value;
    }
}
