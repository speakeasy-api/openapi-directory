import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableVrfInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    enforceUnique?: boolean;
    name: string;
    rd: string;
    tags?: string[];
    tenant?: number;
}
