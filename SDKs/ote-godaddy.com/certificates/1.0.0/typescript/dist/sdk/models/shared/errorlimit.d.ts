import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorLimit extends SpeakeasyBase {
    code: string;
    fields?: any[];
    message?: string;
    retryAfterSec: number;
}
