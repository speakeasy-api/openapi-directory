import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs extends SpeakeasyBase {
    /**
     * MCC value
     */
    mcc?: string;
    /**
     * MNC value
     */
    mnc?: string;
}
/**
 * The format for the realm ('1' or '0')
 */
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum {
    Zero = "0",
    One = "1"
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods extends SpeakeasyBase {
    /**
     * The authentication types for the method. These should be formatted as an object with the EAP method category in camelcase as the key and the list of types as the value (nonEapInnerAuthentication: Reserved, PAP, CHAP, MSCHAP, MSCHAPV2; eapInnerAuthentication: EAP-TLS, EAP-SIM, EAP-AKA, EAP-TTLS with MSCHAPv2; credentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, none, Reserved, Vendor Specific; tunneledEapMethodCredentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, Reserved, Anonymous, Vendor Specific)
     */
    authenticationTypes?: Record<string, any>;
    /**
     * ID of method
     */
    id?: string;
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms extends SpeakeasyBase {
    /**
     * The format for the realm ('1' or '0')
     */
    format?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
    /**
     * An array of EAP methods for the realm.
     */
    methods?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[];
    /**
     * The name of the realm
     */
    realm?: string;
}
/**
 * The network type of this SSID ('Private network', 'Private network with guest access', 'Chargeable public network', 'Free public network', 'Personal device network', 'Emergency services only network', 'Test or experimental', 'Wildcard')
 */
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum {
    ChargeablePublicNetwork = "Chargeable public network",
    EmergencyServicesOnlyNetwork = "Emergency services only network",
    FreePublicNetwork = "Free public network",
    PersonalDeviceNetwork = "Personal device network",
    PrivateNetwork = "Private network",
    PrivateNetworkWithGuestAccess = "Private network with guest access",
    TestOrExperimental = "Test or experimental",
    Wildcard = "Wildcard"
}
/**
 * Operator settings for this SSID
 */
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyOperator extends SpeakeasyBase {
    /**
     * Operator name
     */
    name?: string;
}
/**
 * Venue type ('Unspecified', 'Unspecified Assembly', 'Arena', 'Stadium', 'Passenger Terminal', 'Amphitheater', 'Amusement Park', 'Place of Worship', 'Convention Center', 'Library', 'Museum', 'Restaurant', 'Theater', 'Bar', 'Coffee Shop', 'Zoo or Aquarium', 'Emergency Coordination Center', 'Unspecified Business', 'Doctor or Dentist office', 'Bank', 'Fire Station', 'Police Station', 'Post Office', 'Professional Office', 'Research and Development Facility', 'Attorney Office', 'Unspecified Educational', 'School, Primary', 'School, Secondary', 'University or College', 'Unspecified Factory and Industrial', 'Factory', 'Unspecified Institutional', 'Hospital', 'Long-Term Care Facility', 'Alcohol and Drug Rehabilitation Center', 'Group Home', 'Prison or Jail', 'Unspecified Mercantile', 'Retail Store', 'Grocery Market', 'Automotive Service Station', 'Shopping Mall', 'Gas Station', 'Unspecified Residential', 'Private Residence', 'Hotel or Motel', 'Dormitory', 'Boarding House', 'Unspecified Storage', 'Unspecified Utility and Miscellaneous', 'Unspecified Vehicular', 'Automobile or Truck', 'Airplane', 'Bus', 'Ferry', 'Ship or Boat', 'Train', 'Motor Bike', 'Unspecified Outdoor', 'Muni-mesh Network', 'City Park', 'Rest Area', 'Traffic Control', 'Bus Stop', 'Kiosk')
 */
export declare enum UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum {
    Airplane = "Airplane",
    AlcoholAndDrugRehabilitationCenter = "Alcohol and Drug Rehabilitation Center",
    Amphitheater = "Amphitheater",
    AmusementPark = "Amusement Park",
    Arena = "Arena",
    AttorneyOffice = "Attorney Office",
    AutomobileOrTruck = "Automobile or Truck",
    AutomotiveServiceStation = "Automotive Service Station",
    Bank = "Bank",
    Bar = "Bar",
    BoardingHouse = "Boarding House",
    Bus = "Bus",
    BusStop = "Bus Stop",
    CityPark = "City Park",
    CoffeeShop = "Coffee Shop",
    ConventionCenter = "Convention Center",
    DoctorOrDentistOffice = "Doctor or Dentist office",
    Dormitory = "Dormitory",
    EmergencyCoordinationCenter = "Emergency Coordination Center",
    Factory = "Factory",
    Ferry = "Ferry",
    FireStation = "Fire Station",
    GasStation = "Gas Station",
    GroceryMarket = "Grocery Market",
    GroupHome = "Group Home",
    Hospital = "Hospital",
    HotelOrMotel = "Hotel or Motel",
    Kiosk = "Kiosk",
    Library = "Library",
    LongTermCareFacility = "Long-Term Care Facility",
    MotorBike = "Motor Bike",
    MuniMeshNetwork = "Muni-mesh Network",
    Museum = "Museum",
    PassengerTerminal = "Passenger Terminal",
    PlaceOfWorship = "Place of Worship",
    PoliceStation = "Police Station",
    PostOffice = "Post Office",
    PrisonOrJail = "Prison or Jail",
    PrivateResidence = "Private Residence",
    ProfessionalOffice = "Professional Office",
    ResearchAndDevelopmentFacility = "Research and Development Facility",
    RestArea = "Rest Area",
    Restaurant = "Restaurant",
    RetailStore = "Retail Store",
    SchoolPrimary = "School, Primary",
    SchoolSecondary = "School, Secondary",
    ShipOrBoat = "Ship or Boat",
    ShoppingMall = "Shopping Mall",
    Stadium = "Stadium",
    Theater = "Theater",
    TrafficControl = "Traffic Control",
    Train = "Train",
    UniversityOrCollege = "University or College",
    Unspecified = "Unspecified",
    UnspecifiedAssembly = "Unspecified Assembly",
    UnspecifiedBusiness = "Unspecified Business",
    UnspecifiedEducational = "Unspecified Educational",
    UnspecifiedFactoryAndIndustrial = "Unspecified Factory and Industrial",
    UnspecifiedInstitutional = "Unspecified Institutional",
    UnspecifiedMercantile = "Unspecified Mercantile",
    UnspecifiedOutdoor = "Unspecified Outdoor",
    UnspecifiedResidential = "Unspecified Residential",
    UnspecifiedStorage = "Unspecified Storage",
    UnspecifiedUtilityAndMiscellaneous = "Unspecified Utility and Miscellaneous",
    UnspecifiedVehicular = "Unspecified Vehicular",
    ZooOrAquarium = "Zoo or Aquarium"
}
/**
 * Venue settings for this SSID
 */
export declare class UpdateNetworkWirelessSsidHotspot20RequestBodyVenue extends SpeakeasyBase {
    /**
     * Venue name
     */
    name?: string;
    /**
     * Venue type ('Unspecified', 'Unspecified Assembly', 'Arena', 'Stadium', 'Passenger Terminal', 'Amphitheater', 'Amusement Park', 'Place of Worship', 'Convention Center', 'Library', 'Museum', 'Restaurant', 'Theater', 'Bar', 'Coffee Shop', 'Zoo or Aquarium', 'Emergency Coordination Center', 'Unspecified Business', 'Doctor or Dentist office', 'Bank', 'Fire Station', 'Police Station', 'Post Office', 'Professional Office', 'Research and Development Facility', 'Attorney Office', 'Unspecified Educational', 'School, Primary', 'School, Secondary', 'University or College', 'Unspecified Factory and Industrial', 'Factory', 'Unspecified Institutional', 'Hospital', 'Long-Term Care Facility', 'Alcohol and Drug Rehabilitation Center', 'Group Home', 'Prison or Jail', 'Unspecified Mercantile', 'Retail Store', 'Grocery Market', 'Automotive Service Station', 'Shopping Mall', 'Gas Station', 'Unspecified Residential', 'Private Residence', 'Hotel or Motel', 'Dormitory', 'Boarding House', 'Unspecified Storage', 'Unspecified Utility and Miscellaneous', 'Unspecified Vehicular', 'Automobile or Truck', 'Airplane', 'Bus', 'Ferry', 'Ship or Boat', 'Train', 'Motor Bike', 'Unspecified Outdoor', 'Muni-mesh Network', 'City Park', 'Rest Area', 'Traffic Control', 'Bus Stop', 'Kiosk')
     */
    type?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
}
export declare class UpdateNetworkWirelessSsidHotspot20RequestBody extends SpeakeasyBase {
    /**
     * An array of domain names
     */
    domains?: string[];
    /**
     * Whether or not Hotspot 2.0 for this SSID is enabled
     */
    enabled?: boolean;
    /**
     * An array of MCC/MNC pairs
     */
    mccMncs?: UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[];
    /**
     * An array of NAI realms
     */
    naiRealms?: UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[];
    /**
     * The network type of this SSID ('Private network', 'Private network with guest access', 'Chargeable public network', 'Free public network', 'Personal device network', 'Emergency services only network', 'Test or experimental', 'Wildcard')
     */
    networkAccessType?: UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
    /**
     * Operator settings for this SSID
     */
    operator?: UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
    /**
     * An array of roaming consortium OIs (hexadecimal number 3-5 octets in length)
     */
    roamConsortOis?: string[];
    /**
     * Venue settings for this SSID
     */
    venue?: UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
}
export declare class UpdateNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidHotspot20RequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidHotspot20200ApplicationJSONObject?: Record<string, any>;
}
