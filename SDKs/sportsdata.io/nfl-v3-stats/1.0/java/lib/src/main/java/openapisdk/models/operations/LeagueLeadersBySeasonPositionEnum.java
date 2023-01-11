package openapisdk.models.operations;


public enum LeagueLeadersBySeasonPositionEnum {
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

    private LeagueLeadersBySeasonPositionEnum(String value) {
        this.value = value;
    }
}
