import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExecuteActionRequest extends SpeakeasyBase {
    /**
     * Any parameters required by the action are supplied as a JSON object in the request body. The properties of this object depend on the service action being invoked.
     */
    execBody?: shared.ExecBody;
    /**
     * Action ID of the action to execute.
     */
    actionId: string;
    /**
     * Service ID of the service supporting the action.
     */
    serviceId: string;
}
export declare class ExecuteActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
