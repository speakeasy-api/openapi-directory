package openapisdk.models.shared;


public enum OutageStrategyEnum {
    ONE_SERVICE_PER_GROUP("OneServicePerGroup"),
    ALL_SERVICES_PER_GROUP("AllServicesPerGroup");

    public final String value;

    private OutageStrategyEnum(String value) {
        this.value = value;
    }
}
