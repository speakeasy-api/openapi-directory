// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

type UpdateAppRequestEnforceUniqueUsernamesEnum string

const (
	UpdateAppRequestEnforceUniqueUsernamesEnumNo   UpdateAppRequestEnforceUniqueUsernamesEnum = "no"
	UpdateAppRequestEnforceUniqueUsernamesEnumApp  UpdateAppRequestEnforceUniqueUsernamesEnum = "app"
	UpdateAppRequestEnforceUniqueUsernamesEnumTeam UpdateAppRequestEnforceUniqueUsernamesEnum = "team"
)

func (e *UpdateAppRequestEnforceUniqueUsernamesEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "no":
		fallthrough
	case "app":
		fallthrough
	case "team":
		*e = UpdateAppRequestEnforceUniqueUsernamesEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAppRequestEnforceUniqueUsernamesEnum: %s", s)
	}
}

type UpdateAppRequestPermissionVersionEnum string

const (
	UpdateAppRequestPermissionVersionEnumV1 UpdateAppRequestPermissionVersionEnum = "v1"
	UpdateAppRequestPermissionVersionEnumV2 UpdateAppRequestPermissionVersionEnum = "v2"
)

func (e *UpdateAppRequestPermissionVersionEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "v1":
		fallthrough
	case "v2":
		*e = UpdateAppRequestPermissionVersionEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAppRequestPermissionVersionEnum: %s", s)
	}
}

type UpdateAppRequestVideoProviderEnum string

const (
	UpdateAppRequestVideoProviderEnumAgora UpdateAppRequestVideoProviderEnum = "agora"
	UpdateAppRequestVideoProviderEnumHms   UpdateAppRequestVideoProviderEnum = "hms"
)

func (e *UpdateAppRequestVideoProviderEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "agora":
		fallthrough
	case "hms":
		*e = UpdateAppRequestVideoProviderEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateAppRequestVideoProviderEnum: %s", s)
	}
}

type UpdateAppRequest struct {
	AgoraOptions               *ConfigRequest                              `json:"agora_options,omitempty"`
	ApnConfig                  *APNConfigRequest                           `json:"apn_config,omitempty"`
	AsyncModerationConfig      *AsyncModerationConfigurationRequest        `json:"async_moderation_config,omitempty"`
	AsyncURLEnrichEnabled      *bool                                       `json:"async_url_enrich_enabled,omitempty"`
	AutoTranslationEnabled     *bool                                       `json:"auto_translation_enabled,omitempty"`
	BeforeMessageSendHookURL   *string                                     `json:"before_message_send_hook_url,omitempty"`
	CdnExpirationSeconds       *float64                                    `json:"cdn_expiration_seconds,omitempty"`
	ChannelHideMembersOnly     *bool                                       `json:"channel_hide_members_only,omitempty"`
	CustomActionHandlerURL     *string                                     `json:"custom_action_handler_url,omitempty"`
	DisableAuthChecks          *bool                                       `json:"disable_auth_checks,omitempty"`
	DisablePermissionsChecks   *bool                                       `json:"disable_permissions_checks,omitempty"`
	EnforceUniqueUsernames     *UpdateAppRequestEnforceUniqueUsernamesEnum `json:"enforce_unique_usernames,omitempty"`
	FileUploadConfig           *FileUploadConfigRequest                    `json:"file_upload_config,omitempty"`
	FirebaseConfig             *FirebaseConfigRequest                      `json:"firebase_config,omitempty"`
	Grants                     map[string][]string                         `json:"grants,omitempty"`
	HmsOptions                 *ConfigRequest                              `json:"hms_options,omitempty"`
	HuaweiConfig               *HuaweiConfigRequest                        `json:"huawei_config,omitempty"`
	ImageModerationBlockLabels []string                                    `json:"image_moderation_block_labels,omitempty"`
	ImageModerationEnabled     *bool                                       `json:"image_moderation_enabled,omitempty"`
	ImageModerationLabels      []string                                    `json:"image_moderation_labels,omitempty"`
	ImageUploadConfig          *FileUploadConfigRequest                    `json:"image_upload_config,omitempty"`
	MigratePermissionsToV2     *bool                                       `json:"migrate_permissions_to_v2,omitempty"`
	MultiTenantEnabled         *bool                                       `json:"multi_tenant_enabled,omitempty"`
	PermissionVersion          *UpdateAppRequestPermissionVersionEnum      `json:"permission_version,omitempty"`
	PushConfig                 *PushConfigRequest                          `json:"push_config,omitempty"`
	RemindersInterval          *float64                                    `json:"reminders_interval,omitempty"`
	RevokeTokensIssuedBefore   *time.Time                                  `json:"revoke_tokens_issued_before,omitempty"`
	SqsKey                     *string                                     `json:"sqs_key,omitempty"`
	SqsSecret                  *string                                     `json:"sqs_secret,omitempty"`
	SqsURL                     *string                                     `json:"sqs_url,omitempty"`
	UserSearchDisallowedRoles  []string                                    `json:"user_search_disallowed_roles,omitempty"`
	VideoProvider              *UpdateAppRequestVideoProviderEnum          `json:"video_provider,omitempty"`
	WebhookEvents              []string                                    `json:"webhook_events,omitempty"`
	WebhookURL                 *string                                     `json:"webhook_url,omitempty"`
	XiaomiConfig               *XiaomiConfigRequest                        `json:"xiaomi_config,omitempty"`
}
