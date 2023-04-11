import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableCircuitStatusEnum {
    Two = "2",
    Three = "3",
    One = "1",
    Four = "4",
    Zero = "0",
    Five = "5"
}
export declare class WritableCircuitInput extends SpeakeasyBase {
    cid: string;
    comments?: string;
    commitRate?: number;
    customFields?: Record<string, any>;
    description?: string;
    installDate?: Date;
    provider: number;
    status?: WritableCircuitStatusEnum;
    tags?: string[];
    tenant?: number;
    type: number;
}
