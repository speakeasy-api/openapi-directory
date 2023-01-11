package openapisdk.models.shared;


public enum AwsVmDetailsArchitectureEnum {
    VM_ARCHITECTURE_UNSPECIFIED("VM_ARCHITECTURE_UNSPECIFIED"),
    I386("I386"),
    X8664("X86_64"),
    ARM64("ARM64"),
    X8664_MAC("X86_64_MAC");

    public final String value;

    private AwsVmDetailsArchitectureEnum(String value) {
        this.value = value;
    }
}
