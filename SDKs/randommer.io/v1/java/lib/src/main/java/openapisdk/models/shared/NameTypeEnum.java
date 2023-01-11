package openapisdk.models.shared;


public enum NameTypeEnum {
    FIRSTNAME("firstname"),
    SURNAME("surname"),
    FULLNAME("fullname");

    public final String value;

    private NameTypeEnum(String value) {
        this.value = value;
    }
}
