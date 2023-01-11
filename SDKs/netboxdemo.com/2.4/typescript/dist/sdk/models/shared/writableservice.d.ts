import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableServiceInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    device?: number;
    ipaddresses?: number[];
    name: string;
    port: number;
    protocol: number;
    virtualMachine?: number;
}
