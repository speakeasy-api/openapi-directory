import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRIR } from "./nestedrir";
export declare enum AggregateFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare enum AggregateFamilyValueEnum {
    Four = "4",
    Six = "6"
}
export declare class AggregateFamily extends SpeakeasyBase {
    label: AggregateFamilyLabelEnum;
    value: AggregateFamilyValueEnum;
}
export declare class Aggregate extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    dateAdded?: Date;
    description?: string;
    family?: AggregateFamily;
    id?: number;
    lastUpdated?: Date;
    prefix: string;
    rir: NestedRIR;
    tags?: string[];
}
