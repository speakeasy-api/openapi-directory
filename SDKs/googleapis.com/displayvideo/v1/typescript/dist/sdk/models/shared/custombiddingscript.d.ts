import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScriptRef } from "./custombiddingscriptref";
import { ScriptError } from "./scripterror";
/**
 * Output only. The state of the custom bidding script.
 */
export declare enum CustomBiddingScriptStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Pending = "PENDING"
}
/**
 * A single custom bidding script.
 */
export declare class CustomBiddingScript extends SpeakeasyBase {
    /**
     * Output only. Whether the script is currently being used for scoring by the parent algorithm.
     */
    active?: boolean;
    /**
     * Output only. The time when the script was created.
     */
    createTime?: string;
    /**
     * Output only. The unique ID of the custom bidding algorithm the script belongs to.
     */
    customBiddingAlgorithmId?: string;
    /**
     * Output only. The unique ID of the custom bidding script.
     */
    customBiddingScriptId?: string;
    /**
     * Output only. Error details of a rejected custom bidding script. This field will only be populated when Script.state is REJECTED.
     */
    errors?: ScriptError[];
    /**
     * Output only. The resource name of the custom bidding script.
     */
    name?: string;
    /**
     * The reference to the uploaded custom bidding script file.
     */
    script?: CustomBiddingScriptRef;
    /**
     * Output only. The state of the custom bidding script.
     */
    state?: CustomBiddingScriptStateEnum;
}
/**
 * A single custom bidding script.
 */
export declare class CustomBiddingScriptInput extends SpeakeasyBase {
    /**
     * The reference to the uploaded custom bidding script file.
     */
    script?: CustomBiddingScriptRef;
}
