package openapisdk.models.shared;


public enum MigratingVmStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    READY("READY"),
    FIRST_SYNC("FIRST_SYNC"),
    ACTIVE("ACTIVE"),
    CUTTING_OVER("CUTTING_OVER"),
    CUTOVER("CUTOVER"),
    FINAL_SYNC("FINAL_SYNC"),
    PAUSED("PAUSED"),
    FINALIZING("FINALIZING"),
    FINALIZED("FINALIZED"),
    ERROR("ERROR");

    public final String value;

    private MigratingVmStateEnum(String value) {
        this.value = value;
    }
}
