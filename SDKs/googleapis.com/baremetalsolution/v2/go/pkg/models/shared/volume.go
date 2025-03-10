// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// VolumePerformanceTierEnum - Immutable. Performance tier of the Volume. Default is SHARED.
type VolumePerformanceTierEnum string

const (
	VolumePerformanceTierEnumVolumePerformanceTierUnspecified VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
	VolumePerformanceTierEnumVolumePerformanceTierShared      VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_SHARED"
	VolumePerformanceTierEnumVolumePerformanceTierAssigned    VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
	VolumePerformanceTierEnumVolumePerformanceTierHt          VolumePerformanceTierEnum = "VOLUME_PERFORMANCE_TIER_HT"
)

func (e VolumePerformanceTierEnum) ToPointer() *VolumePerformanceTierEnum {
	return &e
}

func (e *VolumePerformanceTierEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "VOLUME_PERFORMANCE_TIER_UNSPECIFIED":
		fallthrough
	case "VOLUME_PERFORMANCE_TIER_SHARED":
		fallthrough
	case "VOLUME_PERFORMANCE_TIER_ASSIGNED":
		fallthrough
	case "VOLUME_PERFORMANCE_TIER_HT":
		*e = VolumePerformanceTierEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumePerformanceTierEnum: %v", v)
	}
}

// VolumeProtocolEnum - Output only. Storage protocol for the Volume.
type VolumeProtocolEnum string

const (
	VolumeProtocolEnumProtocolUnspecified VolumeProtocolEnum = "PROTOCOL_UNSPECIFIED"
	VolumeProtocolEnumFibreChannel        VolumeProtocolEnum = "FIBRE_CHANNEL"
	VolumeProtocolEnumNfs                 VolumeProtocolEnum = "NFS"
)

func (e VolumeProtocolEnum) ToPointer() *VolumeProtocolEnum {
	return &e
}

func (e *VolumeProtocolEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "PROTOCOL_UNSPECIFIED":
		fallthrough
	case "FIBRE_CHANNEL":
		fallthrough
	case "NFS":
		*e = VolumeProtocolEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumeProtocolEnum: %v", v)
	}
}

// VolumeSnapshotAutoDeleteBehaviorEnum - The behavior to use when snapshot reserved space is full.
type VolumeSnapshotAutoDeleteBehaviorEnum string

const (
	VolumeSnapshotAutoDeleteBehaviorEnumSnapshotAutoDeleteBehaviorUnspecified VolumeSnapshotAutoDeleteBehaviorEnum = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"
	VolumeSnapshotAutoDeleteBehaviorEnumDisabled                              VolumeSnapshotAutoDeleteBehaviorEnum = "DISABLED"
	VolumeSnapshotAutoDeleteBehaviorEnumOldestFirst                           VolumeSnapshotAutoDeleteBehaviorEnum = "OLDEST_FIRST"
	VolumeSnapshotAutoDeleteBehaviorEnumNewestFirst                           VolumeSnapshotAutoDeleteBehaviorEnum = "NEWEST_FIRST"
)

func (e VolumeSnapshotAutoDeleteBehaviorEnum) ToPointer() *VolumeSnapshotAutoDeleteBehaviorEnum {
	return &e
}

func (e *VolumeSnapshotAutoDeleteBehaviorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED":
		fallthrough
	case "DISABLED":
		fallthrough
	case "OLDEST_FIRST":
		fallthrough
	case "NEWEST_FIRST":
		*e = VolumeSnapshotAutoDeleteBehaviorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumeSnapshotAutoDeleteBehaviorEnum: %v", v)
	}
}

// VolumeStateEnum - The state of this storage volume.
type VolumeStateEnum string

const (
	VolumeStateEnumStateUnspecified VolumeStateEnum = "STATE_UNSPECIFIED"
	VolumeStateEnumCreating         VolumeStateEnum = "CREATING"
	VolumeStateEnumReady            VolumeStateEnum = "READY"
	VolumeStateEnumDeleting         VolumeStateEnum = "DELETING"
	VolumeStateEnumUpdating         VolumeStateEnum = "UPDATING"
	VolumeStateEnumCoolOff          VolumeStateEnum = "COOL_OFF"
)

func (e VolumeStateEnum) ToPointer() *VolumeStateEnum {
	return &e
}

func (e *VolumeStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "CREATING":
		fallthrough
	case "READY":
		fallthrough
	case "DELETING":
		fallthrough
	case "UPDATING":
		fallthrough
	case "COOL_OFF":
		*e = VolumeStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumeStateEnum: %v", v)
	}
}

// VolumeStorageTypeEnum - The storage type for this volume.
type VolumeStorageTypeEnum string

const (
	VolumeStorageTypeEnumStorageTypeUnspecified VolumeStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	VolumeStorageTypeEnumSsd                    VolumeStorageTypeEnum = "SSD"
	VolumeStorageTypeEnumHdd                    VolumeStorageTypeEnum = "HDD"
)

func (e VolumeStorageTypeEnum) ToPointer() *VolumeStorageTypeEnum {
	return &e
}

func (e *VolumeStorageTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STORAGE_TYPE_UNSPECIFIED":
		fallthrough
	case "SSD":
		fallthrough
	case "HDD":
		*e = VolumeStorageTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumeStorageTypeEnum: %v", v)
	}
}

// VolumeWorkloadProfileEnum - The workload profile for the volume.
type VolumeWorkloadProfileEnum string

const (
	VolumeWorkloadProfileEnumWorkloadProfileUnspecified VolumeWorkloadProfileEnum = "WORKLOAD_PROFILE_UNSPECIFIED"
	VolumeWorkloadProfileEnumGeneric                    VolumeWorkloadProfileEnum = "GENERIC"
	VolumeWorkloadProfileEnumHana                       VolumeWorkloadProfileEnum = "HANA"
)

func (e VolumeWorkloadProfileEnum) ToPointer() *VolumeWorkloadProfileEnum {
	return &e
}

func (e *VolumeWorkloadProfileEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "WORKLOAD_PROFILE_UNSPECIFIED":
		fallthrough
	case "GENERIC":
		fallthrough
	case "HANA":
		*e = VolumeWorkloadProfileEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VolumeWorkloadProfileEnum: %v", v)
	}
}

// Volume - A storage volume.
type Volume struct {
	// Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well.
	Attached *bool `json:"attached,omitempty"`
	// The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.
	AutoGrownSizeGib *string `json:"autoGrownSizeGib,omitempty"`
	// Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN.
	BootVolume *bool `json:"bootVolume,omitempty"`
	// The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.
	CurrentSizeGib *string `json:"currentSizeGib,omitempty"`
	// Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value.
	EmergencySizeGib *string `json:"emergencySizeGib,omitempty"`
	// Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state.
	ExpireTime *string `json:"expireTime,omitempty"`
	// An identifier for the `Volume`, generated by the backend.
	ID *string `json:"id,omitempty"`
	// Output only. Instances this Volume is attached to. This field is set only in Get requests.
	Instances []string `json:"instances,omitempty"`
	// Labels as key value pairs.
	Labels map[string]string `json:"labels,omitempty"`
	// Maximum size volume can be expanded to in case of evergency, in GiB.
	MaxSizeGib *string `json:"maxSizeGib,omitempty"`
	// Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`
	Name *string `json:"name,omitempty"`
	// Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.
	Notes *string `json:"notes,omitempty"`
	// Originally requested size, in GiB.
	OriginallyRequestedSizeGib *string `json:"originallyRequestedSizeGib,omitempty"`
	// Immutable. Performance tier of the Volume. Default is SHARED.
	PerformanceTier *VolumePerformanceTierEnum `json:"performanceTier,omitempty"`
	// Immutable. Pod name.
	Pod *string `json:"pod,omitempty"`
	// Output only. Storage protocol for the Volume.
	Protocol *VolumeProtocolEnum `json:"protocol,omitempty"`
	// The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.
	RemainingSpaceGib *string `json:"remainingSpaceGib,omitempty"`
	// The requested size of this storage volume, in GiB.
	RequestedSizeGib *string `json:"requestedSizeGib,omitempty"`
	// The behavior to use when snapshot reserved space is full.
	SnapshotAutoDeleteBehavior *VolumeSnapshotAutoDeleteBehaviorEnum `json:"snapshotAutoDeleteBehavior,omitempty"`
	// Whether snapshots are enabled.
	SnapshotEnabled *bool `json:"snapshotEnabled,omitempty"`
	// Details about snapshot space reservation and usage on the storage volume.
	SnapshotReservationDetail *SnapshotReservationDetail `json:"snapshotReservationDetail,omitempty"`
	// The name of the snapshot schedule policy in use for this volume, if any.
	SnapshotSchedulePolicy *string `json:"snapshotSchedulePolicy,omitempty"`
	// The state of this storage volume.
	State *VolumeStateEnum `json:"state,omitempty"`
	// Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.
	StorageAggregatePool *string `json:"storageAggregatePool,omitempty"`
	// The storage type for this volume.
	StorageType *VolumeStorageTypeEnum `json:"storageType,omitempty"`
	// The workload profile for the volume.
	WorkloadProfile *VolumeWorkloadProfileEnum `json:"workloadProfile,omitempty"`
}

// VolumeInput - A storage volume.
type VolumeInput struct {
	// The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0.
	AutoGrownSizeGib *string `json:"autoGrownSizeGib,omitempty"`
	// The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink.
	CurrentSizeGib *string `json:"currentSizeGib,omitempty"`
	// Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value.
	EmergencySizeGib *string `json:"emergencySizeGib,omitempty"`
	// An identifier for the `Volume`, generated by the backend.
	ID *string `json:"id,omitempty"`
	// Labels as key value pairs.
	Labels map[string]string `json:"labels,omitempty"`
	// Maximum size volume can be expanded to in case of evergency, in GiB.
	MaxSizeGib *string `json:"maxSizeGib,omitempty"`
	// Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention.
	Notes *string `json:"notes,omitempty"`
	// Originally requested size, in GiB.
	OriginallyRequestedSizeGib *string `json:"originallyRequestedSizeGib,omitempty"`
	// Immutable. Performance tier of the Volume. Default is SHARED.
	PerformanceTier *VolumePerformanceTierEnum `json:"performanceTier,omitempty"`
	// Immutable. Pod name.
	Pod *string `json:"pod,omitempty"`
	// The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots.
	RemainingSpaceGib *string `json:"remainingSpaceGib,omitempty"`
	// The requested size of this storage volume, in GiB.
	RequestedSizeGib *string `json:"requestedSizeGib,omitempty"`
	// The behavior to use when snapshot reserved space is full.
	SnapshotAutoDeleteBehavior *VolumeSnapshotAutoDeleteBehaviorEnum `json:"snapshotAutoDeleteBehavior,omitempty"`
	// Whether snapshots are enabled.
	SnapshotEnabled *bool `json:"snapshotEnabled,omitempty"`
	// Details about snapshot space reservation and usage on the storage volume.
	SnapshotReservationDetail *SnapshotReservationDetail `json:"snapshotReservationDetail,omitempty"`
	// The name of the snapshot schedule policy in use for this volume, if any.
	SnapshotSchedulePolicy *string `json:"snapshotSchedulePolicy,omitempty"`
	// The state of this storage volume.
	State *VolumeStateEnum `json:"state,omitempty"`
	// Input only. Name of the storage aggregate pool to allocate the volume in. Can be used only for VOLUME_PERFORMANCE_TIER_ASSIGNED volumes.
	StorageAggregatePool *string `json:"storageAggregatePool,omitempty"`
	// The storage type for this volume.
	StorageType *VolumeStorageTypeEnum `json:"storageType,omitempty"`
	// The workload profile for the volume.
	WorkloadProfile *VolumeWorkloadProfileEnum `json:"workloadProfile,omitempty"`
}
