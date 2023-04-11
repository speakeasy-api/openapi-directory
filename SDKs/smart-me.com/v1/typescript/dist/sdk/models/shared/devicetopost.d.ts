import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Energy Type of this device
 */
export declare enum DeviceToPostDeviceEnergyTypeEnum {
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
 * The Sub Type of this Meter.
 */
export declare enum DeviceToPostMeterSubTypeEnum {
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
export declare class DeviceToPost extends SpeakeasyBase {
    /**
     * The Active Power or current flow rate. In kW or m3/h
     */
    activePower?: number;
    /**
     * The Meter Counter Reading (Total Energy used) in kWh or m3.
     */
    counterReading?: number;
    /**
     * The Meter Counter Reading only export
     */
    counterReadingExport?: number;
    /**
     * The Meter Counter Reading only export (Tariff 1)
     */
    counterReadingExportT1?: number;
    /**
     * The Meter Counter Reading only export (Tariff 2)
     */
    counterReadingExportT2?: number;
    /**
     * The Meter Counter Reading Tariff 1 in kWh or m3.
     */
    counterReadingT1?: number;
    /**
     * The Meter Counter Reading Tariff 2 in kWh or m3.
     */
    counterReadingT2?: number;
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
    deviceEnergyType?: DeviceToPostDeviceEnergyTypeEnum;
    /**
     * The digital input number 1
     */
    digitalInput1?: boolean;
    /**
     * The ID of the device
     */
    id?: string;
    /**
     * The Sub Type of this Meter.
     */
    meterSubType?: DeviceToPostMeterSubTypeEnum;
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
     * The Temperature (in degree celsius)
     */
    temperature?: number;
    /**
     * The Date of the Value (in UTC). If this is null the Server Time is used.
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
