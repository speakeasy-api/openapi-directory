import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VirtualTariffTypeEnum {
    Battery = "Battery",
    Solar = "Solar",
    Normal = "Normal"
}
export declare class VirtualTariff extends SpeakeasyBase {
    /**
     * Says how many of the active power is used in this tariff. This is calculated from the last meter values.
     */
    factor?: number;
    id?: string;
    name?: string;
    type?: VirtualTariffTypeEnum;
    unit?: string;
    /**
     * The Counter Value of this tariff
     */
    value?: number;
}
