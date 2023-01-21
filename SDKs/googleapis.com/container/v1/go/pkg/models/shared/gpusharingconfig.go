package shared

type GpuSharingConfigGpuSharingStrategyEnum string

const (
	GPUSharingConfigGPUSharingStrategyEnumGpuSharingStrategyUnspecified GpuSharingConfigGpuSharingStrategyEnum = "GPU_SHARING_STRATEGY_UNSPECIFIED"
	GPUSharingConfigGPUSharingStrategyEnumTimeSharing                   GpuSharingConfigGpuSharingStrategyEnum = "TIME_SHARING"
)

// GpuSharingConfig
// GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
type GpuSharingConfig struct {
	GpuSharingStrategy     *GpuSharingConfigGpuSharingStrategyEnum `json:"gpuSharingStrategy,omitempty"`
	MaxSharedClientsPerGpu *string                                 `json:"maxSharedClientsPerGpu,omitempty"`
}
