package openapisdk.models.operations;


public enum UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum {
    DISABLED("disabled"),
    ROOT_GUARD("root guard"),
    BPDU_GUARD("bpdu guard"),
    LOOP_GUARD("loop guard");

    public final String value;

    private UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum(String value) {
        this.value = value;
    }
}
