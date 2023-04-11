import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a pico charging station. (Only available for pico charging stations)
 */
export declare enum DeviceChargingStationStateEnum {
    Booting = "Booting",
    ReadyNoCarConnected = "ReadyNoCarConnected",
    ReadyCarConnected = "ReadyCarConnected",
    StartedWaitForCar = "StartedWaitForCar",
    Charging = "Charging",
    Installation = "Installation",
    Authorize = "Authorize",
    Offline = "Offline"
}
/**
 * The Energy Type of this device
 */
export declare enum DeviceDeviceEnergyTypeEnum {
    MeterTypeUnknown = "MeterTypeUnknown",
    MeterTypeElectricity = "MeterTypeElectricity",
    MeterTypeWater = "MeterTypeWater",
    MeterTypeGas = "MeterTypeGas",
    MeterTypeHeat = "MeterTypeHeat",
    MeterTypeHCA = "MeterTypeHCA",
    MeterTypeAllMeters = "MeterTypeAllMeters",
    MeterTypeTemperature = "MeterTypeTemperature",
    MeterTypeMBusGateway = "MeterTypeMBusGateway",
    MeterTypeRs485Gateway = "MeterTypeRS485Gateway",
    MeterTypeCustomDevice = "MeterTypeCustomDevice",
    MeterTypeCompressedAir = "MeterTypeCompressedAir",
    MeterTypeSolarLog = "MeterTypeSolarLog",
    MeterTypeVirtualMeter = "MeterTypeVirtualMeter",
    MeterTypeWMBusGateway = "MeterTypeWMBusGateway"
}
/**
 * The Family Type of the device.
 */
export declare enum DeviceFamilyTypeEnum {
    MeterFamilyTypeUnknown = "MeterFamilyTypeUnknown",
    MeterFamilyTypeSmartMeConnectV1 = "MeterFamilyTypeSmartMeConnectV1",
    MeterFamiliyTypeSmartMeMeter = "MeterFamiliyTypeSmartMeMeter",
    MeterFamiliyTypeSmartMeMeterWithSwitch = "MeterFamiliyTypeSmartMeMeterWithSwitch",
    MeterFamilyTypeMBusGatewayV1 = "MeterFamilyTypeMBusGatewayV1",
    MeterFamilyTypeRs485GatewayV1 = "MeterFamilyTypeRS485GatewayV1",
    MeterFamilyTypeKamstrupModule = "MeterFamilyTypeKamstrupModule",
    MeterFamilyTypeSmartMe3PhaseMeter80A = "MeterFamilyTypeSmartMe3PhaseMeter80A",
    MeterFamilyTypeSmartMe3PhaseMeter32A = "MeterFamilyTypeSmartMe3PhaseMeter32A",
    MeterFamilyTypeSmartMe3PhaseTelstarTransformer = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer",
    MeterFamilyTypeLandisGyrModule = "MeterFamilyTypeLandisGyrModule",
    MeterFamilyTypeFnnOpticalModule = "MeterFamilyTypeFnnOpticalModule",
    MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi",
    MeterFamilyTypeSmartMe3PhaseTelstar80AMobile = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile",
    MeterFamilyTypeSmartMe1PhaseMeter80Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi",
    MeterFamilyTypeSmartMe1PhaseMeter32Av2WiFi = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi",
    MeterFamilyTypeSmartMe1PhaseMeter80AGprs = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs",
    MeterFamilyTypeSmartMe1PhaseMeter32AGprs = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs",
    MeterFamilyTypeWMBusGatewayV1 = "MeterFamilyTypeWMBusGatewayV1",
    MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile",
    MeterFamilyTypeMithralHallV1 = "MeterFamilyTypeMithralHallV1",
    MeterFamilyTypeRestApiMeter = "MeterFamilyTypeRestApiMeter",
    MeterFamilyTypeVirtualBillingMeter = "MeterFamilyTypeVirtualBillingMeter"
}
/**
 * The sub meter type (e.g. warmwater or coldwater)
 */
export declare enum DeviceMeterSubTypeEnum {
    MeterSubTypeUnknown = "MeterSubTypeUnknown",
    MeterSubTypeCold = "MeterSubTypeCold",
    MeterSubTypeHeat = "MeterSubTypeHeat",
    MeterSubTypeChargingStation = "MeterSubTypeChargingStation",
    MeterSubTypeElectricity = "MeterSubTypeElectricity",
    MeterSubTypeWater = "MeterSubTypeWater",
    MeterSubTypeGas = "MeterSubTypeGas",
    MeterSubTypeElectricityHeat = "MeterSubTypeElectricityHeat",
    MeterSubTypeTemperature = "MeterSubTypeTemperature",
    MeterSubTypeVirtualBattery = "MeterSubTypeVirtualBattery"
}
/**
 * Container Class for the Web API
 */
export declare class Device extends SpeakeasyBase {
    /**
     * The Actvie Power or current flow rate
     */
    activePower?: number;
    /**
     * The Actvie Power Phase L1
     */
    activePowerL1?: number;
    /**
     * The Actvie Power Phase L2
     */
    activePowerL2?: number;
    /**
     * The Actvie Power Phase L3
     */
    activePowerL3?: number;
    /**
     * The Unit of the Active Power Value
     */
    activePowerUnit?: string;
    /**
     * The Number of the Active Tariff
     */
    activeTariff?: number;
    /**
     * An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.
     */
    additionalMeterSerialNumber?: string;
    /**
     * The analog output number 1 (PWM signal) (0 - 32183)
     */
    analogOutput1?: number;
    /**
     * The analog output number 2 (PWM signal) (0 - 32183)
     */
    analogOutput2?: number;
    /**
     * The state of a pico charging station. (Only available for pico charging stations)
     */
    chargingStationState?: DeviceChargingStationStateEnum;
    /**
     * The Meter Counter Reading (Total Energy used)
     */
    counterReading?: number;
    /**
     * The Meter Counter Reading only export
     */
    counterReadingExport?: number;
    /**
     * The Meter Counter Reading only import
     */
    counterReadingImport?: number;
    /**
     * The Meter Counter Reading Tariff 1
     */
    counterReadingT1?: number;
    /**
     * The Meter Counter Reading Tariff 2
     */
    counterReadingT2?: number;
    /**
     * The Meter Counter Reading Tariff 3
     */
    counterReadingT3?: number;
    /**
     * The Meter Counter Reading Tariff 4
     */
    counterReadingT4?: number;
    /**
     * The Unit of the Counter Reading
     */
    counterReadingUnit?: string;
    /**
     * The Current (in A)
     */
    current?: number;
    /**
     * The Current Phase L1 (in A)
     */
    currentL1?: number;
    /**
     * The Current Phase L2 (in A)
     */
    currentL2?: number;
    /**
     * The Current Phase L3 (in A)
     */
    currentL3?: number;
    /**
     * The Energy Type of this device
     */
    deviceEnergyType?: DeviceDeviceEnergyTypeEnum;
    /**
     * The digital input number 1
     */
    digitalInput1?: boolean;
    /**
     * The digital input number 2
     */
    digitalInput2?: boolean;
    /**
     * The digital output number 1
     */
    digitalOutput1?: boolean;
    /**
     * The digital output number 2
     */
    digitalOutput2?: boolean;
    /**
     * The Family Type of the device.
     */
    familyType?: DeviceFamilyTypeEnum;
    /**
     * The current flow rate (e.g. m3/h)
     */
    flowRate?: number;
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The sub meter type (e.g. warmwater or coldwater)
     */
    meterSubType?: DeviceMeterSubTypeEnum;
    /**
     * The Name of the Device
     */
    name?: string;
    /**
     * The Power Factor (cos phi). Range: 0 - 1
     */
    powerFactor?: number;
    /**
     * The Power Factor (cos phi) Phase L1. Range: 0 - 1
     */
    powerFactorL1?: number;
    /**
     * The Power Factor (cos phi) Phase L2. Range: 0 - 1
     */
    powerFactorL2?: number;
    /**
     * The Power Factor (cos phi) Phase L3. Range: 0 - 1
     */
    powerFactorL3?: number;
    /**
     * The Serial number
     */
    serial?: number;
    /**
     * Flag if the Switch is on on this device.
     */
    switchOn?: boolean;
    /**
     * Flag if the Phase L1 is on on this device.
     */
    switchPhaseL1On?: boolean;
    /**
     * Flag if the Phase L2 is on on this device.
     */
    switchPhaseL2On?: boolean;
    /**
     * Flag if the Phase L3 is on on this device.
     */
    switchPhaseL3On?: boolean;
    /**
     * The Temperature (in degree celsius)
     */
    temperature?: number;
    /**
     * Time of last successful connection the the smart-me Cloud.
     */
    valueDate?: Date;
    /**
     * The Voltage (in V)
     */
    voltage?: number;
    /**
     * The Voltage Phase L1 (in V)
     */
    voltageL1?: number;
    /**
     * The Voltage Phase L2 (in V)
     */
    voltageL2?: number;
    /**
     * The Voltage Phase L3 (in V)
     */
    voltageL3?: number;
}
