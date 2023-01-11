package openapisdk.models.shared;


public enum ConfigurationEnumStatusEnum {
    OK("ok"),
    INPROGRESS("inprogress"),
    NOTSTARTED("notstarted");

    public final String value;

    private ConfigurationEnumStatusEnum(String value) {
        this.value = value;
    }
}
