import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditGroupApplicationRequest extends SpeakeasyBase {
    applicationEditRequest: shared.ApplicationEditRequest;
    /**
     * The unique identifier of the group application in Noyo
     */
    applicationId: string;
    /**
     * The current version identifier of the group application
     */
    version: string;
}
export declare class EditGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Group Application
     */
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
