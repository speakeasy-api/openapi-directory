import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupApplicationRequest extends SpeakeasyBase {
    applicationCreateRequest: shared.ApplicationCreateRequest;
    /**
     * The unique identifier of the group in Noyo
     */
    groupId: string;
}
export declare class CreateGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Group Application
     */
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
