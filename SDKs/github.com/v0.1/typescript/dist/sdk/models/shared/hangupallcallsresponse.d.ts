import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message
 */
export declare enum HangupAllCallsResponseMessageEnum {
    AllCallsHungup = "All Calls Hungup",
    HangupCallFailed = "Hangup Call Failed"
}
/**
 * Response
 */
export declare class HangupAllCallsResponse extends SpeakeasyBase {
    /**
     * Response message
     */
    message: HangupAllCallsResponseMessageEnum;
    /**
     * Whether the request was successful or not
     */
    success: boolean;
}
