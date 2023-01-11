package openapisdk.models.shared;


public enum OccurrenceKindEnum {
    NOTE_KIND_UNSPECIFIED("NOTE_KIND_UNSPECIFIED"),
    VULNERABILITY("VULNERABILITY"),
    BUILD("BUILD"),
    IMAGE("IMAGE"),
    PACKAGE_("PACKAGE"),
    DEPLOYMENT("DEPLOYMENT"),
    DISCOVERY("DISCOVERY"),
    ATTESTATION("ATTESTATION"),
    UPGRADE("UPGRADE"),
    COMPLIANCE("COMPLIANCE"),
    DSSE_ATTESTATION("DSSE_ATTESTATION");

    public final String value;

    private OccurrenceKindEnum(String value) {
        this.value = value;
    }
}
