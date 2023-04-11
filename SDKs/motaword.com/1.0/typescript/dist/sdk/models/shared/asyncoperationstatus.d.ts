import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncOperationStatusEnumEnum } from "./asyncoperationstatusenumenum";
/**
 * Response in TMX or async request
 */
export declare class AsyncOperationStatus extends SpeakeasyBase {
    /**
     * operation duration in milliseconds
     */
    duration?: number;
    key?: string;
    message?: Record<string, any>;
    status?: AsyncOperationStatusEnumEnum;
}
