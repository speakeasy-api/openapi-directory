package shared

import (
	"time"
)

type TargetAllowedScanProfiles struct {
	ID   *ScanProfileEnum `json:"id,omitempty"`
	Name *string          `json:"name,omitempty"`
}

type Target struct {
	AllowedScanProfiles []TargetAllowedScanProfiles `json:"allowed_scan_profiles,omitempty"`
	Assets              []Asset                     `json:"assets,omitempty"`
	Changed             *time.Time                  `json:"changed,omitempty"`
	ChangedBy           *ChangedBy                  `json:"changed_by,omitempty"`
	ConnectedTarget     *string                     `json:"connected_target,omitempty"`
	Enabled             *bool                       `json:"enabled,omitempty"`
	Environment         *EnvironmentEnum            `json:"environment,omitempty"`
	ID                  *string                     `json:"id,omitempty"`
	Labels              []string                    `json:"labels,omitempty"`
	Name                *string                     `json:"name,omitempty"`
	ReportType          *ReportTypeEnum             `json:"report_type,omitempty"`
	ScanProfile         *ScanProfileEnum            `json:"scan_profile,omitempty"`
	Site                *Site                       `json:"site,omitempty"`
	Type                *TargetTypeEnum             `json:"type,omitempty"`
}

type TargetInput struct {
	ConnectedTarget *string          `json:"connected_target,omitempty"`
	Environment     *EnvironmentEnum `json:"environment,omitempty"`
	Labels          []string         `json:"labels,omitempty"`
	Name            *string          `json:"name,omitempty"`
	ReportType      *ReportTypeEnum  `json:"report_type,omitempty"`
	ScanProfile     *ScanProfileEnum `json:"scan_profile,omitempty"`
	Site            *SiteInput       `json:"site,omitempty"`
	Type            *TargetTypeEnum  `json:"type,omitempty"`
}
