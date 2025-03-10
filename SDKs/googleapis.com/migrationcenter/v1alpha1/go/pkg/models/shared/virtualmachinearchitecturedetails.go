// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// VirtualMachineArchitectureDetailsHyperthreadingEnum - CPU hyperthreading support.
type VirtualMachineArchitectureDetailsHyperthreadingEnum string

const (
	VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingUnspecified VirtualMachineArchitectureDetailsHyperthreadingEnum = "HYPER_THREADING_UNSPECIFIED"
	VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingDisabled    VirtualMachineArchitectureDetailsHyperthreadingEnum = "HYPER_THREADING_DISABLED"
	VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingEnabled     VirtualMachineArchitectureDetailsHyperthreadingEnum = "HYPER_THREADING_ENABLED"
)

func (e VirtualMachineArchitectureDetailsHyperthreadingEnum) ToPointer() *VirtualMachineArchitectureDetailsHyperthreadingEnum {
	return &e
}

func (e *VirtualMachineArchitectureDetailsHyperthreadingEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "HYPER_THREADING_UNSPECIFIED":
		fallthrough
	case "HYPER_THREADING_DISABLED":
		fallthrough
	case "HYPER_THREADING_ENABLED":
		*e = VirtualMachineArchitectureDetailsHyperthreadingEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for VirtualMachineArchitectureDetailsHyperthreadingEnum: %v", v)
	}
}

// VirtualMachineArchitectureDetails - Details of the VM architecture.
type VirtualMachineArchitectureDetails struct {
	// Details about the BIOS.
	Bios *BiosDetails `json:"bios,omitempty"`
	// CPU architecture, e.g., "x64-based PC", "x86_64", "i686" etc.
	CPUArchitecture *string `json:"cpuArchitecture,omitempty"`
	// CPU manufacturer, e.g., "Intel", "AMD".
	CPUManufacturer *string `json:"cpuManufacturer,omitempty"`
	// CPU name, e.g., "Intel Xeon E5-2690", "AMD EPYC 7571" etc.
	CPUName *string `json:"cpuName,omitempty"`
	// Number of processor sockets allocated to the machine.
	CPUSocketCount *int `json:"cpuSocketCount,omitempty"`
	// Number of CPU threads allocated to the machine.
	CPUThreadCount *int `json:"cpuThreadCount,omitempty"`
	// Firmware (BIOS/efi).
	Firmware *string `json:"firmware,omitempty"`
	// CPU hyperthreading support.
	Hyperthreading *VirtualMachineArchitectureDetailsHyperthreadingEnum `json:"hyperthreading,omitempty"`
	// Hardware vendor.
	Vendor *string `json:"vendor,omitempty"`
}
