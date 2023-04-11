import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Action when the device has lost the connection
 */
export declare enum OutputConfigurationContainerDigitalOutputNoConnectionActionEnum {
    Nothing = "Nothing",
    TurnOff = "TurnOff",
    TurnOn = "TurnOn",
    SetPwmValue = "SetPwmValue"
}
/**
 * The S0 Pulse Value
 */
export declare enum OutputConfigurationContainerS0PulseValueEnum {
    PulseValue1000Kwh = "PulseValue1000Kwh",
    PulseValue10000Kwh = "PulseValue10000Kwh"
}
/**
 * The Type of the output
 */
export declare enum OutputConfigurationContainerTypeEnum {
    ImpulseOutputActiveEnergy = "ImpulseOutputActiveEnergy",
    ImpulseOutputActiveEnergyImport = "ImpulseOutputActiveEnergyImport",
    ImpulseOutputActiveEnergyExport = "ImpulseOutputActiveEnergyExport",
    ImpulseOutputReactiveEnergy = "ImpulseOutputReactiveEnergy",
    DigitalOutput = "DigitalOutput",
    AnalogPwmSignalOutput = "AnalogPwmSignalOutput",
    Disabled = "Disabled"
}
/**
 * Configuration for the outputs of a meter (analog/digital outputs)
 */
export declare class OutputConfigurationContainer extends SpeakeasyBase {
    /**
     * The Action when the device has lost the connection
     */
    digitalOutputNoConnectionAction?: OutputConfigurationContainerDigitalOutputNoConnectionActionEnum;
    /**
     * The Name of the Output
     */
    name?: string;
    /**
     * The number of the Output. (1 for Output 1, 2 for Output 2)
     */
    number?: number;
    /**
     * The S0 Pulse Value
     */
    s0PulseValue?: OutputConfigurationContainerS0PulseValueEnum;
    /**
     * The Type of the output
     */
    type?: OutputConfigurationContainerTypeEnum;
}
