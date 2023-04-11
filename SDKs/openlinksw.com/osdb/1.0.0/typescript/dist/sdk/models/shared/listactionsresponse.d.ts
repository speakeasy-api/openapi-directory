import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";
export declare enum ListActionsResponseStatusEnum {
    Success = "success"
}
/**
 * An array of action descriptions for the actions supported by the given service.
 */
export declare class ListActionsResponse extends SpeakeasyBase {
    /**
     * The path of the REST API method
     */
    api: string;
    /**
     * The name of the REST API method
     */
    method: string;
    response: ActionDescription[];
    status: ListActionsResponseStatusEnum;
}
