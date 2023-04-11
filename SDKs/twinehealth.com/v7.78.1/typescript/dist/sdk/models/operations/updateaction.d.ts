import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateActionRequest extends SpeakeasyBase {
    updateActionRequestInput: shared.UpdateActionRequestInput;
    /**
     * Action identifier
     */
    id: string;
}
export declare class UpdateActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid Request
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateActionResponse?: shared.UpdateActionResponse;
}
