package openapisdk.models.shared;


public enum PersistenceConfigRdbSnapshotPeriodEnum {
    SNAPSHOT_PERIOD_UNSPECIFIED("SNAPSHOT_PERIOD_UNSPECIFIED"),
    ONE_HOUR("ONE_HOUR"),
    SIX_HOURS("SIX_HOURS"),
    TWELVE_HOURS("TWELVE_HOURS"),
    TWENTY_FOUR_HOURS("TWENTY_FOUR_HOURS");

    public final String value;

    private PersistenceConfigRdbSnapshotPeriodEnum(String value) {
        this.value = value;
    }
}
