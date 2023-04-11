import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container class for the folder API
 */
export declare class FolderData extends SpeakeasyBase {
    /**
     * The Counter values for electricity (kWh)
     */
    electricityCounterValue?: number;
    /**
     * The Power for electricity (kW)
     */
    electricityPower?: number;
    /**
     * The Counter values for Gas (m3)
     */
    gasCounterValue?: number;
    /**
     * The Flow Rate for Gas (m3/h)
     */
    gasFlowRate?: number;
    /**
     * The Counter values for Heat (kWh)
     */
    heatCounterValue?: number;
    /**
     * The Power for Heat (kW)
     */
    heatPower?: number;
    /**
     * The Counter values for Water (m3)
     */
    waterCounterValue?: number;
    /**
     * The Flow Rate for Water (m3/h)
     */
    waterFlowRate?: number;
}
