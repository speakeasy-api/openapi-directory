// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// WorkerPoolInput - Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
type WorkerPoolInput struct {
	// User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
	Annotations map[string]string `json:"annotations,omitempty"`
	// A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
	DisplayName *string `json:"displayName,omitempty"`
	// Network describes the network configuration for a `WorkerPool`.
	NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
	// Defines the configuration to be used for creating workers in the pool.
	WorkerConfig *WorkerConfig `json:"workerConfig,omitempty"`
}

// WorkerPoolStateEnum - Output only. `WorkerPool` state.
type WorkerPoolStateEnum string

const (
	WorkerPoolStateEnumStateUnspecified WorkerPoolStateEnum = "STATE_UNSPECIFIED"
	WorkerPoolStateEnumCreating         WorkerPoolStateEnum = "CREATING"
	WorkerPoolStateEnumRunning          WorkerPoolStateEnum = "RUNNING"
	WorkerPoolStateEnumDeleting         WorkerPoolStateEnum = "DELETING"
	WorkerPoolStateEnumDeleted          WorkerPoolStateEnum = "DELETED"
)

func (e WorkerPoolStateEnum) ToPointer() *WorkerPoolStateEnum {
	return &e
}

func (e *WorkerPoolStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "CREATING":
		fallthrough
	case "RUNNING":
		fallthrough
	case "DELETING":
		fallthrough
	case "DELETED":
		*e = WorkerPoolStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for WorkerPoolStateEnum: %v", v)
	}
}

// WorkerPool - Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
type WorkerPool struct {
	// User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
	Annotations map[string]string `json:"annotations,omitempty"`
	// Output only. Time at which the request to create the `WorkerPool` was received.
	CreateTime *string `json:"createTime,omitempty"`
	// Output only. Time at which the request to delete the `WorkerPool` was received.
	DeleteTime *string `json:"deleteTime,omitempty"`
	// A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
	DisplayName *string `json:"displayName,omitempty"`
	// Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.
	Etag *string `json:"etag,omitempty"`
	// Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed.
	Name *string `json:"name,omitempty"`
	// Network describes the network configuration for a `WorkerPool`.
	NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
	// Output only. `WorkerPool` state.
	State *WorkerPoolStateEnum `json:"state,omitempty"`
	// Output only. A unique identifier for the `WorkerPool`.
	UID *string `json:"uid,omitempty"`
	// Output only. Time at which the request to update the `WorkerPool` was received.
	UpdateTime *string `json:"updateTime,omitempty"`
	// Defines the configuration to be used for creating workers in the pool.
	WorkerConfig *WorkerConfig `json:"workerConfig,omitempty"`
}
