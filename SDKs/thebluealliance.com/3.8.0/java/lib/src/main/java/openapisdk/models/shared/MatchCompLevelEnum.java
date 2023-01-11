package openapisdk.models.shared;


public enum MatchCompLevelEnum {
    QM("qm"),
    EF("ef"),
    QF("qf"),
    SF("sf"),
    F("f");

    public final String value;

    private MatchCompLevelEnum(String value) {
        this.value = value;
    }
}
