import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableVLANStatusEnum {
    One = "1",
    Two = "2",
    Three = "3"
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
