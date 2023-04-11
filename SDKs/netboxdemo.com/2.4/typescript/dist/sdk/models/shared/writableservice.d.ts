import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableServiceProtocolEnum {
    Six = "6",
    Seventeen = "17"
}
export declare class WritableServiceInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    device?: number;
    ipaddresses?: number[];
    name: string;
    port: number;
    protocol: WritableServiceProtocolEnum;
    virtualMachine?: number;
}
