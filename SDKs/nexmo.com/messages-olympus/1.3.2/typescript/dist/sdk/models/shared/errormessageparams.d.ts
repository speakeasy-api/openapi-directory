import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorMessageParamsInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid message parameters
**/
export declare class ErrorMessageParams extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters?: ErrorMessageParamsInvalidParameters[];
    title: string;
    type: string;
}
