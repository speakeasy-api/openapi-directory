package openapisdk.models.operations;


public enum LeagueLeadersBySeasonColumnEnum {
    FANTASY_POINTS("FantasyPoints"),
    PASSING_YARDS("PassingYards"),
    RUSHING_YARDS("RushingYards"),
    RECEPTIONS("Receptions"),
    SACKS("Sacks"),
    INTERCEPTIONS("Interceptions"),
    TOUCHDOWNS("Touchdowns");

    public final String value;

    private LeagueLeadersBySeasonColumnEnum(String value) {
        this.value = value;
    }
}
