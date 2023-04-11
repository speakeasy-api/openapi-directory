import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelGroupApplicationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group application in Noyo
     */
    applicationId: string;
    /**
     * The current version identifier of the group application
     */
    version: string;
}
export declare class CancelGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the Group Application with updated status
     */
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
