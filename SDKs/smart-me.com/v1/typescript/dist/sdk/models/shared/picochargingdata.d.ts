import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode how this station is connected to the cloud
 */
export declare enum PicoChargingDataConnectionModeEnum {
    NetworkToCloudConnectionModeNoConnection = "NetworkToCloudConnectionMode_NoConnection",
    NetworkToCloudConnectionModeDirectWiFiConnection = "NetworkToCloudConnectionMode_DirectWiFiConnection",
    NetworkToCloudConnectionModeGPRSConnection = "NetworkToCloudConnectionMode_GPRSConnection",
    NetworkToCloudConnectionModeNBIotConnection = "NetworkToCloudConnectionMode_NBIotConnection",
    NetworkToCloudConnectionModeLteCatM1Connection = "NetworkToCloudConnectionMode_LteCatM1Connection",
    NetworkToCloudConnectionModeMeshWiFiConnection = "NetworkToCloudConnectionMode_MeshWiFiConnection",
    NetworkToCloudConnectionModeMeshMobileConnection = "NetworkToCloudConnectionMode_MeshMobileConnection"
}
/**
 * The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes.
 */
export declare enum PicoChargingDataLastWarningOrErrorEnum {
    MeterDataloggerEvent = "MeterDataloggerEvent",
    MeterRestart = "MeterRestart",
    PowerDown = "PowerDown",
    MissingPhaseL1 = "MissingPhaseL1",
    MissingPhaseL2 = "MissingPhaseL2",
    MissingPhaseL3 = "MissingPhaseL3",
    TamperDetectionCover = "TamperDetectionCover",
    MagneticFieldDetection = "MagneticFieldDetection",
    ClockAdjusted = "ClockAdjusted",
    Overvoltage = "Overvoltage",
    Undervoltage = "Undervoltage",
    OvervoltageL1 = "OvervoltageL1",
    OvervoltageL2 = "OvervoltageL2",
    OvervoltageL3 = "OvervoltageL3",
    ChargingTransaction = "ChargingTransaction",
    PicoErrorControllerPanic = "PicoErrorControllerPanic",
    PicoErrorMidServicePanic = "PicoErrorMidServicePanic",
    PicoWarningRcdTriggered = "PicoWarningRcdTriggered",
    PicoWarningCableLockError = "PicoWarningCableLockError",
    PicoWarningDiodeFailure = "PicoWarningDiodeFailure",
    PicoWarningOverload = "PicoWarningOverload",
    PicoWarningHighTemperature = "PicoWarningHighTemperature"
}
/**
 * Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A
 */
export declare enum PicoChargingDataLoadSheddingStateEnum {
    MaxCurrent = "MaxCurrent",
    HalfCurrent = "HalfCurrent",
    MinCurrent = "MinCurrent",
    NoCurrent = "NoCurrent"
}
/**
 * The state of the charging station
 */
export declare enum PicoChargingDataStateEnum {
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
 * Container class for the pico charging station API
 */
export declare class PicoChargingData extends SpeakeasyBase {
    /**
     * The energy used by this active charging (in kWh)
     */
    activeChargingEnergy?: number;
    /**
     * The power of the active charging (in kW)
     */
    activeChargingPower?: number;
    /**
     * The mode how this station is connected to the cloud
     */
    connectionMode?: PicoChargingDataConnectionModeEnum;
    /**
     * The duration of this charging in seconds
     */
    duration?: number;
    /**
     * The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes.
     */
    lastWarningOrError?: PicoChargingDataLastWarningOrErrorEnum;
    /**
     * The message of the last warning or error of the station.
     */
    lastWarningOrErrorMessage?: string;
    /**
     * The time when the LastWarningOrError happend
     */
    lastWarningOrErrorTime?: Date;
    /**
     * Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A
     */
    loadSheddingState?: PicoChargingDataLoadSheddingStateEnum;
    /**
     * The name of the loadmanagement group. Or string.empty if the station is not in a group
     */
    loadmanagementGroupName?: string;
    /**
     * Max allowed charging current in A
     */
    maxAllowedChargingCurrent?: number;
    /**
     * Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A
     */
    maxDynamicCurrent?: number;
    /**
     * Max. current of the loadmanagement group of this station (if there is any) in A
     */
    maxLoadmanagementGroupCurrent?: number;
    /**
     * Max. current of the station in A
     */
    maxStationCurrent?: number;
    /**
     * Min. current of the station in A
     */
    minStationCurrent?: number;
    /**
     * The state of the charging station
     */
    state?: PicoChargingDataStateEnum;
    /**
     * The date of this values
     */
    valueDate?: Date;
}
