import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListActionsRequest extends SpeakeasyBase {
    /**
     * Service ID of the service for which actions are to be listed
     */
    serviceId: string;
}
export declare class ListActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    /**
     * An array of action descriptions for the actions supported by the given service.
     */
    listActionsResponse?: shared.ListActionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
