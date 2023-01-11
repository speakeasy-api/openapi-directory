package openapisdk.models.shared;


public enum OrgClassificationEnum {
    LEGISLATURE("legislature"),
    EXECUTIVE("executive"),
    LOWER("lower"),
    UPPER("upper"),
    GOVERNMENT("government");

    public final String value;

    private OrgClassificationEnum(String value) {
        this.value = value;
    }
}
