import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnmuteUserRequest extends SpeakeasyBase {
    targetId: string;
    targetIds: string[];
    timeout?: number;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
