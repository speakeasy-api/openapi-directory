package openapisdk.models.shared;


public enum EntityTypeEnum {
    UNKNOWN("UNKNOWN"),
    PERSON("PERSON"),
    LOCATION("LOCATION"),
    ORGANIZATION("ORGANIZATION"),
    EVENT("EVENT"),
    WORK_OF_ART("WORK_OF_ART"),
    CONSUMER_GOOD("CONSUMER_GOOD"),
    OTHER("OTHER");

    public final String value;

    private EntityTypeEnum(String value) {
        this.value = value;
    }
}
