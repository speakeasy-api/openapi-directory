package sdk

import (
	"net/http"

	"openapi/pkg/utils"
)

var ServerList = []string{
	"https://smart-me.com:443",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	AccessToken                         *AccessToken
	Account                             *Account
	Actions                             *Actions
	AdditionalDeviceInformation         *AdditionalDeviceInformation
	CustomDevice                        *CustomDevice
	DeviceBySerial                      *DeviceBySerial
	Devices                             *Devices
	DevicesByEnergy                     *DevicesByEnergy
	DevicesBySubType                    *DevicesBySubType
	FastSendDeviceValues                *FastSendDeviceValues
	Folder                              *Folder
	FolderAssign                        *FolderAssign
	FolderMenu                          *FolderMenu
	FolderSettings                      *FolderSettings
	Health                              *Health
	MBus                                *MBus
	MeterFolderInformation              *MeterFolderInformation
	MeterValues                         *MeterValues
	OAuth                               *OAuth
	PicoCharging                        *PicoCharging
	PicoChargingHistory                 *PicoChargingHistory
	PicoLoadmanagementGroup             *PicoLoadmanagementGroup
	PicoLoadmanagementSetDynamicCurrent *PicoLoadmanagementSetDynamicCurrent
	PicoSettings                        *PicoSettings
	RegisterForRealtimeAPI              *RegisterForRealtimeAPI
	SmartMeDeviceConfiguration          *SmartMeDeviceConfiguration
	SubUser                             *SubUser
	User                                *User
	UserToFolderAssign                  *UserToFolderAssign
	Values                              *Values
	ValuesInPast                        *ValuesInPast
	ValuesInPastMultiple                *ValuesInPastMultiple
	VirtualBillingMeterActive           *VirtualBillingMeterActive
	VirtualBillingMeterDeactivate       *VirtualBillingMeterDeactivate
	VirtualBillingMeters                *VirtualBillingMeters
	VirtualMeterCalculateFormula        *VirtualMeterCalculateFormula
	VirtualTariff                       *VirtualTariff
	VirtualTariffConsumption            *VirtualTariffConsumption
	VirtualTariffsForProperty           *VirtualTariffsForProperty

	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	sdk.AccessToken = NewAccessToken(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Account = NewAccount(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Actions = NewActions(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.AdditionalDeviceInformation = NewAdditionalDeviceInformation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.CustomDevice = NewCustomDevice(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DeviceBySerial = NewDeviceBySerial(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Devices = NewDevices(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DevicesByEnergy = NewDevicesByEnergy(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.DevicesBySubType = NewDevicesBySubType(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.FastSendDeviceValues = NewFastSendDeviceValues(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Folder = NewFolder(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.FolderAssign = NewFolderAssign(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.FolderMenu = NewFolderMenu(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.FolderSettings = NewFolderSettings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Health = NewHealth(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MBus = NewMBus(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MeterFolderInformation = NewMeterFolderInformation(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.MeterValues = NewMeterValues(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.OAuth = NewOAuth(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PicoCharging = NewPicoCharging(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PicoChargingHistory = NewPicoChargingHistory(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PicoLoadmanagementGroup = NewPicoLoadmanagementGroup(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PicoLoadmanagementSetDynamicCurrent = NewPicoLoadmanagementSetDynamicCurrent(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.PicoSettings = NewPicoSettings(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.RegisterForRealtimeAPI = NewRegisterForRealtimeAPI(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.SmartMeDeviceConfiguration = NewSmartMeDeviceConfiguration(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.SubUser = NewSubUser(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.User = NewUser(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.UserToFolderAssign = NewUserToFolderAssign(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.Values = NewValues(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ValuesInPast = NewValuesInPast(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.ValuesInPastMultiple = NewValuesInPastMultiple(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualBillingMeterActive = NewVirtualBillingMeterActive(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualBillingMeterDeactivate = NewVirtualBillingMeterDeactivate(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualBillingMeters = NewVirtualBillingMeters(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualMeterCalculateFormula = NewVirtualMeterCalculateFormula(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualTariff = NewVirtualTariff(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualTariffConsumption = NewVirtualTariffConsumption(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	sdk.VirtualTariffsForProperty = NewVirtualTariffsForProperty(
		sdk._defaultClient,
		sdk._securityClient,
		sdk._serverURL,
		sdk._language,
		sdk._sdkVersion,
		sdk._genVersion,
	)

	return sdk
}
