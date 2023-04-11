import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Type of the output
 */
export declare enum InputConfigurationContainerTypeEnum {
    TariffInput = "TariffInput",
    DigitalInput = "DigitalInput"
}
/**
 * Configuration for the input of a meter (digital inputs)
 */
export declare class InputConfigurationContainer extends SpeakeasyBase {
    /**
     * The Name of the Input
     */
    name?: string;
    /**
     * The number of the Input. (1 for Input 1)
     */
    number?: number;
    /**
     * The visualization text for an OFF action
     */
    offText?: string;
    /**
     * The visualization text for an ON action
     */
    onText?: string;
    /**
     * The Type of the output
     */
    type?: InputConfigurationContainerTypeEnum;
}
