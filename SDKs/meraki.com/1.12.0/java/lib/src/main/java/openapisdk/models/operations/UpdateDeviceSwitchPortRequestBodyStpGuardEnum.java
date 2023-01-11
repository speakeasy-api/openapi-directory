package openapisdk.models.operations;


public enum UpdateDeviceSwitchPortRequestBodyStpGuardEnum {
    DISABLED("disabled"),
    ROOT_GUARD("root guard"),
    BPDU_GUARD("bpdu guard"),
    LOOP_GUARD("loop guard");

    public final String value;

    private UpdateDeviceSwitchPortRequestBodyStpGuardEnum(String value) {
        this.value = value;
    }
}
