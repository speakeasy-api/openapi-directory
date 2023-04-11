import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupApplicationRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class GetGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Group Application
     */
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
