package shared

// GoogleChromeManagementV1UsbPeripheralReport
// USB connected peripheral report.
type GoogleChromeManagementV1UsbPeripheralReport struct {
	Categories      []string `json:"categories,omitempty"`
	ClassID         *int32   `json:"classId,omitempty"`
	FirmwareVersion *string  `json:"firmwareVersion,omitempty"`
	Name            *string  `json:"name,omitempty"`
	Pid             *int32   `json:"pid,omitempty"`
	SubclassID      *int32   `json:"subclassId,omitempty"`
	Vendor          *string  `json:"vendor,omitempty"`
	Vid             *int32   `json:"vid,omitempty"`
}
