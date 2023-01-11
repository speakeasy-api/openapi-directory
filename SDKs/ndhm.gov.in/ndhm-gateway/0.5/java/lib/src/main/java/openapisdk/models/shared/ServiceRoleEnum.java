package openapisdk.models.shared;


public enum ServiceRoleEnum {
    HIP("HIP"),
    HIU("HIU"),
    HIP_AND_HIU("HIP_AND_HIU"),
    HEALTH_LOCKER("HEALTH_LOCKER");

    public final String value;

    private ServiceRoleEnum(String value) {
        this.value = value;
    }
}
