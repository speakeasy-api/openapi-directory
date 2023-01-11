package openapisdk.models.shared;


public enum GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum {
    RESTRICTION_TYPE_UNSPECIFIED("RESTRICTION_TYPE_UNSPECIFIED"),
    ALLOW_ALL_GCP_RESOURCES("ALLOW_ALL_GCP_RESOURCES"),
    ALLOW_COMPLIANT_RESOURCES("ALLOW_COMPLIANT_RESOURCES"),
    APPEND_COMPLIANT_RESOURCES("APPEND_COMPLIANT_RESOURCES");

    public final String value;

    private GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum(String value) {
        this.value = value;
    }
}
