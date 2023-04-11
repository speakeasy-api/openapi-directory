import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorNotFoundErrors extends SpeakeasyBase {
    detail?: string;
    status?: string;
}
/**
 * Not found
 */
export declare class ErrorNotFound extends SpeakeasyBase {
    errors?: ErrorNotFoundErrors[];
}
