import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableVRFInput extends SpeakeasyBase {
    customFields?: Record<string, any>;
    description?: string;
    /**
     * Prevent duplicate prefixes/IP addresses within this VRF
     */
    enforceUnique?: boolean;
    name: string;
    rd: string;
    tags?: string[];
    tenant?: number;
}
