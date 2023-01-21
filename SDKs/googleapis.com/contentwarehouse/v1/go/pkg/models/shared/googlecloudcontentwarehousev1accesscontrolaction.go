package shared

type GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum string

const (
	GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnumUnknown              GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum = "UNKNOWN"
	GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnumAddPolicyBinding     GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum = "ADD_POLICY_BINDING"
	GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnumRemovePolicyBinding  GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum = "REMOVE_POLICY_BINDING"
	GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnumReplacePolicyBinding GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum = "REPLACE_POLICY_BINDING"
)

// GoogleCloudContentwarehouseV1AccessControlAction
// Represents the action responsible for access control list management operations.
type GoogleCloudContentwarehouseV1AccessControlAction struct {
	OperationType *GoogleCloudContentwarehouseV1AccessControlActionOperationTypeEnum `json:"operationType,omitempty"`
	Policy        *GoogleIamV1Policy                                                 `json:"policy,omitempty"`
}
