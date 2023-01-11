package openapisdk.models.shared;


public enum AcceleratorConfigTypeEnum {
    ACCELERATOR_TYPE_UNSPECIFIED("ACCELERATOR_TYPE_UNSPECIFIED"),
    NVIDIA_TESLA_K80("NVIDIA_TESLA_K80"),
    NVIDIA_TESLA_P100("NVIDIA_TESLA_P100"),
    NVIDIA_TESLA_V100("NVIDIA_TESLA_V100"),
    NVIDIA_TESLA_P4("NVIDIA_TESLA_P4"),
    NVIDIA_TESLA_T4("NVIDIA_TESLA_T4"),
    NVIDIA_TESLA_A100("NVIDIA_TESLA_A100"),
    NVIDIA_TESLA_T4_VWS("NVIDIA_TESLA_T4_VWS"),
    NVIDIA_TESLA_P100_VWS("NVIDIA_TESLA_P100_VWS"),
    NVIDIA_TESLA_P4_VWS("NVIDIA_TESLA_P4_VWS"),
    TPU_V2("TPU_V2"),
    TPU_V3("TPU_V3");

    public final String value;

    private AcceleratorConfigTypeEnum(String value) {
        this.value = value;
    }
}
