import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class OpenAIFile extends SpeakeasyBase {
    bytes: number;
    createdAt: number;
    filename: string;
    id: string;
    object: string;
    purpose: string;
    status?: string;
    statusDetails?: Record<string, any>;
}
