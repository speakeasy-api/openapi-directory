import { SpeakeasyBase } from "../../../internal/utils";
import { AsyncOperationStatusEnumEnum } from "./asyncoperationstatusenumenum";
export declare class AsyncOperationStatus extends SpeakeasyBase {
    duration?: number;
    key?: string;
    message?: Record<string, any>;
    status?: AsyncOperationStatusEnumEnum;
}
