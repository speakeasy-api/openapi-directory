import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionHelpRequest extends SpeakeasyBase {
    /**
     * Action ID of the action for which help text is being requested.
     */
    actionId: string;
    /**
     * Service ID of the service supporting the action.
     */
    serviceId: string;
}
export declare class ActionHelpResponse extends SpeakeasyBase {
    /**
     * Action help text
     */
    actionHelpResponse?: shared.ActionHelpResponse;
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
