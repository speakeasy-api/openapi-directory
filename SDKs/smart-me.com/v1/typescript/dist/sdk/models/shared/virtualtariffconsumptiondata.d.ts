import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the virtual tariff (e.g. solar)
 */
export declare enum VirtualTariffConsumptionDataTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}
/**
 * Container class for the virtual tariff consumption
 */
export declare class VirtualTariffConsumptionData extends SpeakeasyBase {
    /**
     * The consumption (e.g. kWh) of this tariff
     */
    consumption?: number;
    /**
     * The currency of the price
     */
    currency?: string;
    /**
     * The Name of this virtual tariff
     */
    name?: string;
    /**
     * The price of the energy in this timerange
     */
    price?: number;
    /**
     * The type of the virtual tariff (e.g. solar)
     */
    tariffType?: VirtualTariffConsumptionDataTariffTypeEnum;
}
