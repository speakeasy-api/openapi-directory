package shared

type GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum string

const (
	GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnumACLModeUnknown                         GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum = "ACL_MODE_UNKNOWN"
	GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnumACLModeUniversalAccess                 GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum = "ACL_MODE_UNIVERSAL_ACCESS"
	GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnumACLModeDocumentLevelAccessControlByoid GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum = "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_BYOID"
	GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnumACLModeDocumentLevelAccessControlGci   GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum = "ACL_MODE_DOCUMENT_LEVEL_ACCESS_CONTROL_GCI"
)

type GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnum string

const (
	GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnumDbUnknown          GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnum = "DB_UNKNOWN"
	GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnumDbInfraSpanner     GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnum = "DB_INFRA_SPANNER"
	GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnumDbCloudSQLPostgres GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnum = "DB_CLOUD_SQL_POSTGRES"
)

type GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum string

const (
	GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnumDocumentCreatorDefaultRoleUnspecified GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum = "DOCUMENT_CREATOR_DEFAULT_ROLE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnumDocumentAdmin                         GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum = "DOCUMENT_ADMIN"
	GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnumDocumentEditor                        GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum = "DOCUMENT_EDITOR"
	GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnumDocumentViewer                        GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum = "DOCUMENT_VIEWER"
)

// GoogleCloudContentwarehouseV1InitializeProjectRequest
// Request message for projectService.InitializeProject
type GoogleCloudContentwarehouseV1InitializeProjectRequest struct {
	AccessControlMode          *GoogleCloudContentwarehouseV1InitializeProjectRequestAccessControlModeEnum          `json:"accessControlMode,omitempty"`
	DatabaseType               *GoogleCloudContentwarehouseV1InitializeProjectRequestDatabaseTypeEnum               `json:"databaseType,omitempty"`
	DocumentCreatorDefaultRole *GoogleCloudContentwarehouseV1InitializeProjectRequestDocumentCreatorDefaultRoleEnum `json:"documentCreatorDefaultRole,omitempty"`
	KmsKey                     *string                                                                              `json:"kmsKey,omitempty"`
}
