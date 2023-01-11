package openapisdk.models.shared;


public enum SchedulerAcceleratorConfigTypeEnum {
    SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED("SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED"),
    NVIDIA_TESLA_K80("NVIDIA_TESLA_K80"),
    NVIDIA_TESLA_P100("NVIDIA_TESLA_P100"),
    NVIDIA_TESLA_V100("NVIDIA_TESLA_V100"),
    NVIDIA_TESLA_P4("NVIDIA_TESLA_P4"),
    NVIDIA_TESLA_T4("NVIDIA_TESLA_T4"),
    NVIDIA_TESLA_A100("NVIDIA_TESLA_A100"),
    TPU_V2("TPU_V2"),
    TPU_V3("TPU_V3");

    public final String value;

    private SchedulerAcceleratorConfigTypeEnum(String value) {
        this.value = value;
    }
}
