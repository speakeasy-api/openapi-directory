package openapisdk.models.shared;


public enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum {
    LINUX_EXECUTION_UNSPECIFIED("LINUX_EXECUTION_UNSPECIFIED"),
    LINUX_EXECUTION_FORBIDDEN("LINUX_EXECUTION_FORBIDDEN"),
    LINUX_EXECUTION_UNRESTRICTED("LINUX_EXECUTION_UNRESTRICTED"),
    LINUX_EXECUTION_HARDENED_GVISOR("LINUX_EXECUTION_HARDENED_GVISOR"),
    LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL("LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL");

    public final String value;

    private GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxExecutionEnum(String value) {
        this.value = value;
    }
}
