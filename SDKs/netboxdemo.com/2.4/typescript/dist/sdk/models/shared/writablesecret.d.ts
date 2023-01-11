import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableSecretInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    device: number;
    name?: string;
    plaintext: string;
    role: number;
    tags?: string[];
}
