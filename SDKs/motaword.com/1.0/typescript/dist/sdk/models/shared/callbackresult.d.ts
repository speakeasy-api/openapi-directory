import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * Callback result
 */
export declare class CallbackResult extends SpeakeasyBase {
    data?: Project;
    /**
     * Callback response returned from `url`.
     */
    result?: string;
    type?: ProjectStatusEnum;
    /**
     * The URL that received the callback.
     */
    url?: string;
}
