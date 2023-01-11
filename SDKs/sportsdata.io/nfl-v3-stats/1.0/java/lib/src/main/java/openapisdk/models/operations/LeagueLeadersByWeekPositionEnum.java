package openapisdk.models.operations;


public enum LeagueLeadersByWeekPositionEnum {
    ALL("ALL"),
    OFFENSE("OFFENSE"),
    QB("QB"),
    RB("RB"),
    WR("WR"),
    TE("TE"),
    DEFENSE("DEFENSE"),
    DL("DL"),
    LB("LB"),
    DB("DB"),
    K("K");

    public final String value;

    private LeagueLeadersByWeekPositionEnum(String value) {
        this.value = value;
    }
}
