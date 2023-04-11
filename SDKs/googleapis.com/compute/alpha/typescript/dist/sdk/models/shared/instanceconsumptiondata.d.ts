import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConsumptionInfo } from "./instanceconsumptioninfo";
export declare class InstanceConsumptionData extends SpeakeasyBase {
    consumptionInfo?: InstanceConsumptionInfo;
    /**
     * Server-defined URL for the instance.
     */
    instance?: string;
}
