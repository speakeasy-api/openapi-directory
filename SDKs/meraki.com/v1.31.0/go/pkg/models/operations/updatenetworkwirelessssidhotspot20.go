// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs struct {
	// MCC value
	Mcc *string `json:"mcc,omitempty"`
	// MNC value
	Mnc *string `json:"mnc,omitempty"`
}

// UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum - The format for the realm ('1' or '0')
type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum = "0"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumOne  UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum = "1"
)

func (e *UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "0":
		fallthrough
	case "1":
		*e = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum: %s", s)
	}
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods struct {
	// The authentication types for the method. These should be formatted as an object with the EAP method category in camelcase as the key and the list of types as the value (nonEapInnerAuthentication: Reserved, PAP, CHAP, MSCHAP, MSCHAPV2; eapInnerAuthentication: EAP-TLS, EAP-SIM, EAP-AKA, EAP-TTLS with MSCHAPv2; credentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, none, Reserved, Vendor Specific; tunneledEapMethodCredentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, Reserved, Anonymous, Vendor Specific)
	AuthenticationTypes map[string]interface{} `json:"authenticationTypes,omitempty"`
	// ID of method
	ID *string `json:"id,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms struct {
	// The format for the realm ('1' or '0')
	Format *UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum `json:"format,omitempty"`
	// An array of EAP methods for the realm.
	Methods []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods `json:"methods,omitempty"`
	// The name of the realm
	Realm *string `json:"realm,omitempty"`
}

// UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum - The network type of this SSID ('Private network', 'Private network with guest access', 'Chargeable public network', 'Free public network', 'Personal device network', 'Emergency services only network', 'Test or experimental', 'Wildcard')
type UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumChargeablePublicNetwork       UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Chargeable public network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumEmergencyServicesOnlyNetwork  UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Emergency services only network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumFreePublicNetwork             UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Free public network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPersonalDeviceNetwork         UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Personal device network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPrivateNetwork                UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Private network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumPrivateNetworkWithGuestAccess UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Private network with guest access"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumTestOrExperimental            UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Test or experimental"
	UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumWildcard                      UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum = "Wildcard"
)

func (e *UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "Chargeable public network":
		fallthrough
	case "Emergency services only network":
		fallthrough
	case "Free public network":
		fallthrough
	case "Personal device network":
		fallthrough
	case "Private network":
		fallthrough
	case "Private network with guest access":
		fallthrough
	case "Test or experimental":
		fallthrough
	case "Wildcard":
		*e = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum: %s", s)
	}
}

// UpdateNetworkWirelessSsidHotspot20RequestBodyOperator - Operator settings for this SSID
type UpdateNetworkWirelessSsidHotspot20RequestBodyOperator struct {
	// Operator name
	Name *string `json:"name,omitempty"`
}

// UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum - Venue type ('Unspecified', 'Unspecified Assembly', 'Arena', 'Stadium', 'Passenger Terminal', 'Amphitheater', 'Amusement Park', 'Place of Worship', 'Convention Center', 'Library', 'Museum', 'Restaurant', 'Theater', 'Bar', 'Coffee Shop', 'Zoo or Aquarium', 'Emergency Coordination Center', 'Unspecified Business', 'Doctor or Dentist office', 'Bank', 'Fire Station', 'Police Station', 'Post Office', 'Professional Office', 'Research and Development Facility', 'Attorney Office', 'Unspecified Educational', 'School, Primary', 'School, Secondary', 'University or College', 'Unspecified Factory and Industrial', 'Factory', 'Unspecified Institutional', 'Hospital', 'Long-Term Care Facility', 'Alcohol and Drug Rehabilitation Center', 'Group Home', 'Prison or Jail', 'Unspecified Mercantile', 'Retail Store', 'Grocery Market', 'Automotive Service Station', 'Shopping Mall', 'Gas Station', 'Unspecified Residential', 'Private Residence', 'Hotel or Motel', 'Dormitory', 'Boarding House', 'Unspecified Storage', 'Unspecified Utility and Miscellaneous', 'Unspecified Vehicular', 'Automobile or Truck', 'Airplane', 'Bus', 'Ferry', 'Ship or Boat', 'Train', 'Motor Bike', 'Unspecified Outdoor', 'Muni-mesh Network', 'City Park', 'Rest Area', 'Traffic Control', 'Bus Stop', 'Kiosk')
type UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum string

const (
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAirplane                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Airplane"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAlcoholAndDrugRehabilitationCenter UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Alcohol and Drug Rehabilitation Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAmphitheater                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Amphitheater"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAmusementPark                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Amusement Park"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumArena                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Arena"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAttorneyOffice                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Attorney Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAutomobileOrTruck                  UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Automobile or Truck"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumAutomotiveServiceStation           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Automotive Service Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBank                               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bank"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBar                                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bar"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBoardingHouse                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Boarding House"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBus                                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bus"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumBusStop                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Bus Stop"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumCityPark                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "City Park"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumCoffeeShop                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Coffee Shop"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumConventionCenter                   UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Convention Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumDoctorOrDentistOffice              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Doctor or Dentist office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumDormitory                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Dormitory"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumEmergencyCoordinationCenter        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Emergency Coordination Center"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFactory                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Factory"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFerry                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Ferry"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumFireStation                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Fire Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGasStation                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Gas Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGroceryMarket                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Grocery Market"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumGroupHome                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Group Home"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumHospital                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Hospital"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumHotelOrMotel                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Hotel or Motel"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumKiosk                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Kiosk"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumLibrary                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Library"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumLongTermCareFacility               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Long-Term Care Facility"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMotorBike                          UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Motor Bike"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMuniMeshNetwork                    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Muni-mesh Network"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumMuseum                             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Museum"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPassengerTerminal                  UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Passenger Terminal"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPlaceOfWorship                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Place of Worship"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPoliceStation                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Police Station"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPostOffice                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Post Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPrisonOrJail                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Prison or Jail"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPrivateResidence                   UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Private Residence"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumProfessionalOffice                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Professional Office"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumResearchAndDevelopmentFacility     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Research and Development Facility"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRestArea                           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Rest Area"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRestaurant                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Restaurant"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumRetailStore                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Retail Store"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumSchoolPrimary                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "School, Primary"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumSchoolSecondary                    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "School, Secondary"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumShipOrBoat                         UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Ship or Boat"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumShoppingMall                       UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Shopping Mall"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumStadium                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Stadium"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTheater                            UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Theater"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTrafficControl                     UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Traffic Control"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumTrain                              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Train"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUniversityOrCollege                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "University or College"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecified                        UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedAssembly                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Assembly"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedBusiness                UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Business"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedEducational             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Educational"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedFactoryAndIndustrial    UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Factory and Industrial"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedInstitutional           UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Institutional"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedMercantile              UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Mercantile"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedOutdoor                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Outdoor"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedResidential             UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Residential"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedStorage                 UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Storage"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedUtilityAndMiscellaneous UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Utility and Miscellaneous"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumUnspecifiedVehicular               UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Unspecified Vehicular"
	UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumZooOrAquarium                      UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum = "Zoo or Aquarium"
)

func (e *UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "Airplane":
		fallthrough
	case "Alcohol and Drug Rehabilitation Center":
		fallthrough
	case "Amphitheater":
		fallthrough
	case "Amusement Park":
		fallthrough
	case "Arena":
		fallthrough
	case "Attorney Office":
		fallthrough
	case "Automobile or Truck":
		fallthrough
	case "Automotive Service Station":
		fallthrough
	case "Bank":
		fallthrough
	case "Bar":
		fallthrough
	case "Boarding House":
		fallthrough
	case "Bus":
		fallthrough
	case "Bus Stop":
		fallthrough
	case "City Park":
		fallthrough
	case "Coffee Shop":
		fallthrough
	case "Convention Center":
		fallthrough
	case "Doctor or Dentist office":
		fallthrough
	case "Dormitory":
		fallthrough
	case "Emergency Coordination Center":
		fallthrough
	case "Factory":
		fallthrough
	case "Ferry":
		fallthrough
	case "Fire Station":
		fallthrough
	case "Gas Station":
		fallthrough
	case "Grocery Market":
		fallthrough
	case "Group Home":
		fallthrough
	case "Hospital":
		fallthrough
	case "Hotel or Motel":
		fallthrough
	case "Kiosk":
		fallthrough
	case "Library":
		fallthrough
	case "Long-Term Care Facility":
		fallthrough
	case "Motor Bike":
		fallthrough
	case "Muni-mesh Network":
		fallthrough
	case "Museum":
		fallthrough
	case "Passenger Terminal":
		fallthrough
	case "Place of Worship":
		fallthrough
	case "Police Station":
		fallthrough
	case "Post Office":
		fallthrough
	case "Prison or Jail":
		fallthrough
	case "Private Residence":
		fallthrough
	case "Professional Office":
		fallthrough
	case "Research and Development Facility":
		fallthrough
	case "Rest Area":
		fallthrough
	case "Restaurant":
		fallthrough
	case "Retail Store":
		fallthrough
	case "School, Primary":
		fallthrough
	case "School, Secondary":
		fallthrough
	case "Ship or Boat":
		fallthrough
	case "Shopping Mall":
		fallthrough
	case "Stadium":
		fallthrough
	case "Theater":
		fallthrough
	case "Traffic Control":
		fallthrough
	case "Train":
		fallthrough
	case "University or College":
		fallthrough
	case "Unspecified":
		fallthrough
	case "Unspecified Assembly":
		fallthrough
	case "Unspecified Business":
		fallthrough
	case "Unspecified Educational":
		fallthrough
	case "Unspecified Factory and Industrial":
		fallthrough
	case "Unspecified Institutional":
		fallthrough
	case "Unspecified Mercantile":
		fallthrough
	case "Unspecified Outdoor":
		fallthrough
	case "Unspecified Residential":
		fallthrough
	case "Unspecified Storage":
		fallthrough
	case "Unspecified Utility and Miscellaneous":
		fallthrough
	case "Unspecified Vehicular":
		fallthrough
	case "Zoo or Aquarium":
		*e = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum: %s", s)
	}
}

// UpdateNetworkWirelessSsidHotspot20RequestBodyVenue - Venue settings for this SSID
type UpdateNetworkWirelessSsidHotspot20RequestBodyVenue struct {
	// Venue name
	Name *string `json:"name,omitempty"`
	// Venue type ('Unspecified', 'Unspecified Assembly', 'Arena', 'Stadium', 'Passenger Terminal', 'Amphitheater', 'Amusement Park', 'Place of Worship', 'Convention Center', 'Library', 'Museum', 'Restaurant', 'Theater', 'Bar', 'Coffee Shop', 'Zoo or Aquarium', 'Emergency Coordination Center', 'Unspecified Business', 'Doctor or Dentist office', 'Bank', 'Fire Station', 'Police Station', 'Post Office', 'Professional Office', 'Research and Development Facility', 'Attorney Office', 'Unspecified Educational', 'School, Primary', 'School, Secondary', 'University or College', 'Unspecified Factory and Industrial', 'Factory', 'Unspecified Institutional', 'Hospital', 'Long-Term Care Facility', 'Alcohol and Drug Rehabilitation Center', 'Group Home', 'Prison or Jail', 'Unspecified Mercantile', 'Retail Store', 'Grocery Market', 'Automotive Service Station', 'Shopping Mall', 'Gas Station', 'Unspecified Residential', 'Private Residence', 'Hotel or Motel', 'Dormitory', 'Boarding House', 'Unspecified Storage', 'Unspecified Utility and Miscellaneous', 'Unspecified Vehicular', 'Automobile or Truck', 'Airplane', 'Bus', 'Ferry', 'Ship or Boat', 'Train', 'Motor Bike', 'Unspecified Outdoor', 'Muni-mesh Network', 'City Park', 'Rest Area', 'Traffic Control', 'Bus Stop', 'Kiosk')
	Type *UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum `json:"type,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20RequestBody struct {
	// An array of domain names
	Domains []string `json:"domains,omitempty"`
	// Whether or not Hotspot 2.0 for this SSID is enabled
	Enabled *bool `json:"enabled,omitempty"`
	// An array of MCC/MNC pairs
	MccMncs []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs `json:"mccMncs,omitempty"`
	// An array of NAI realms
	NaiRealms []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms `json:"naiRealms,omitempty"`
	// The network type of this SSID ('Private network', 'Private network with guest access', 'Chargeable public network', 'Free public network', 'Personal device network', 'Emergency services only network', 'Test or experimental', 'Wildcard')
	NetworkAccessType *UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum `json:"networkAccessType,omitempty"`
	// Operator settings for this SSID
	Operator *UpdateNetworkWirelessSsidHotspot20RequestBodyOperator `json:"operator,omitempty"`
	// An array of roaming consortium OIs (hexadecimal number 3-5 octets in length)
	RoamConsortOis []string `json:"roamConsortOis,omitempty"`
	// Venue settings for this SSID
	Venue *UpdateNetworkWirelessSsidHotspot20RequestBodyVenue `json:"venue,omitempty"`
}

type UpdateNetworkWirelessSsidHotspot20Request struct {
	RequestBody *UpdateNetworkWirelessSsidHotspot20RequestBody `request:"mediaType=application/json"`
	NetworkID   string                                         `pathParam:"style=simple,explode=false,name=networkId"`
	Number      string                                         `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidHotspot20Response struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Successful operation
	UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject map[string]interface{}
}
