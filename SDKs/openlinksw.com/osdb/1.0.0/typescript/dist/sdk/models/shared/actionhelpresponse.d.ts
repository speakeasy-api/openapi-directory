import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHelp } from "./actionhelp";
export declare enum ActionHelpResponseStatusEnum {
    Success = "success"
}
/**
 * Action help text
 */
export declare class ActionHelpResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: ActionHelp;
    status: ActionHelpResponseStatusEnum;
}
