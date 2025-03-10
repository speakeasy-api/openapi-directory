// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum - Reason for the rollback
type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum string

const (
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumBrokeOldFeatures         RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "broke old features"
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumOther                    RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "other"
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumPerformance              RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "performance"
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumStability                RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "stability"
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumTesting                  RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "testing"
	RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnumUnifyingNetworksVersions RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum = "unifying networks versions"
)

func (e *RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "broke old features":
		fallthrough
	case "other":
		fallthrough
	case "performance":
		fallthrough
	case "stability":
		fallthrough
	case "testing":
		fallthrough
	case "unifying networks versions":
		*e = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum: %s", s)
	}
}

type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons struct {
	// Reason for the rollback
	Category RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum `json:"category"`
	// Additional comment about the rollback
	Comment string `json:"comment"`
}

// RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup - The Staged Upgrade Group containing the name and ID
type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup struct {
	// ID of the Staged Upgrade Group
	ID string `json:"id"`
}

// RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones - The Staged Upgrade Milestones for the specific stage
type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones struct {
	// The start time of the staged upgrade stage. (In ISO-8601 format, in the time zone of the network.)
	ScheduledFor string `json:"scheduledFor"`
}

type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages struct {
	// The Staged Upgrade Group containing the name and ID
	Group *RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup `json:"group,omitempty"`
	// The Staged Upgrade Milestones for the specific stage
	Milestones *RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones `json:"milestones,omitempty"`
}

type RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody struct {
	// The reason for rolling back the staged upgrade
	Reasons []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons `json:"reasons,omitempty"`
	// All completed or in-progress stages in the network with their new start times. All pending stages will be canceled
	Stages []RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages `json:"stages"`
}

type RollbacksNetworkFirmwareUpgradesStagedEventsRequest struct {
	RequestBody RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody `request:"mediaType=application/json"`
	NetworkID   string                                                  `pathParam:"style=simple,explode=false,name=networkId"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion - Details of the version the device will upgrade to
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion struct {
	// Id of the Version being upgraded to
	ID *string `json:"id,omitempty"`
	// Firmware version short name
	ShortName *string `json:"shortName,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade - Details of the next firmware upgrade
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade struct {
	// Details of the version the device will upgrade to
	ToVersion *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgradeToVersion `json:"toVersion,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch - The Switch network to be updated
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch struct {
	// Details of the next firmware upgrade
	NextUpgrade *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitchNextUpgrade `json:"nextUpgrade,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts - The network devices to be updated
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts struct {
	// The Switch network to be updated
	Switch *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProductsSwitch `json:"switch,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum - Reason for the rollback
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum string

const (
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumBrokeOldFeatures         RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "broke old features"
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumOther                    RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "other"
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumPerformance              RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "performance"
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumStability                RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "stability"
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumTesting                  RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "testing"
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnumUnifyingNetworksVersions RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum = "unifying networks versions"
)

func (e *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "broke old features":
		fallthrough
	case "other":
		fallthrough
	case "performance":
		fallthrough
	case "stability":
		fallthrough
	case "testing":
		fallthrough
	case "unifying networks versions":
		*e = RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum: %s", s)
	}
}

type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons struct {
	// Reason for the rollback
	Category *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasonsCategoryEnum `json:"category,omitempty"`
	// Additional comment about the rollback
	Comment *string `json:"comment,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup - The staged upgrade group
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup struct {
	// Description of the Staged Upgrade Group
	Description *string `json:"description,omitempty"`
	// Id of the Staged Upgrade Group
	ID *string `json:"id,omitempty"`
	// Name of the Staged Upgrade Group
	Name *string `json:"name,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones - The Staged Upgrade Milestones for the stage
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones struct {
	// Time that the group was canceled
	CanceledAt *time.Time `json:"canceledAt,omitempty"`
	// Finish time for the group
	CompletedAt *time.Time `json:"completedAt,omitempty"`
	// Scheduled start time for the group
	ScheduledFor *time.Time `json:"scheduledFor,omitempty"`
	// Start time for the group
	StartedAt *time.Time `json:"startedAt,omitempty"`
}

type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages struct {
	// The staged upgrade group
	Group *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesGroup `json:"group,omitempty"`
	// The Staged Upgrade Milestones for the stage
	Milestones *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStagesMilestones `json:"milestones,omitempty"`
	// Current upgrade status of the group
	Status *string `json:"status,omitempty"`
}

// RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSON - Successful operation
type RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSON struct {
	// The network devices to be updated
	Products *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONProducts `json:"products,omitempty"`
	// Reasons for the rollback
	Reasons []RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONReasons `json:"reasons,omitempty"`
	// The ordered stages in the network
	Stages []RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONStages `json:"stages,omitempty"`
}

type RollbacksNetworkFirmwareUpgradesStagedEventsResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject *RollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSON
}
