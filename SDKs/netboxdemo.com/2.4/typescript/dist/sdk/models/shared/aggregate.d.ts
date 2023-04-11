import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRIR } from "./nestedrir";
export declare enum AggregateFamilyEnum {
    Four = "4",
    Six = "6"
}
export declare class Aggregate extends SpeakeasyBase {
    created?: Date;
    customFields?: Record<string, any>;
    dateAdded?: Date;
    description?: string;
    family?: AggregateFamilyEnum;
    id?: number;
    lastUpdated?: Date;
    prefix: string;
    rir: NestedRIR;
    tags?: string[];
}
