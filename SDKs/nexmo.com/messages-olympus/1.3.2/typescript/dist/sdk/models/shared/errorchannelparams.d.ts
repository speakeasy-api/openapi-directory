import { SpeakeasyBase } from "../../../internal/utils";
export declare class ErrorChannelParamsInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
/**
 * Invalid channel parameters
**/
export declare class ErrorChannelParams extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters?: ErrorChannelParamsInvalidParameters[];
    title: string;
    type: string;
}
