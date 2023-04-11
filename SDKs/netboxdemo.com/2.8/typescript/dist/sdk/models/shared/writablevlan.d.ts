import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableVLANStatusEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class WritableVLANInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    group?: number;
    name: string;
    role?: number;
    site?: number;
    status?: WritableVLANStatusEnum;
    tags?: string[];
    tenant?: number;
    vid: number;
}
