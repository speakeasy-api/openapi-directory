import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableClusterInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Record<string, any>;
    group?: number;
    name: string;
    site?: number;
    tags?: string[];
    tenant?: number;
    type: number;
}
