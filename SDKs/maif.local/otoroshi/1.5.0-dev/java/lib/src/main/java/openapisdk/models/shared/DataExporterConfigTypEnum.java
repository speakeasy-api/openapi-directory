package openapisdk.models.shared;


public enum DataExporterConfigTypEnum {
    KAFKA("kafka"),
    PULSAR("pulsar"),
    FILE("file"),
    MAILER("mailer"),
    ELASTIC("elastic"),
    CONSOLE("console"),
    CUSTOM("custom");

    public final String value;

    private DataExporterConfigTypEnum(String value) {
        this.value = value;
    }
}
