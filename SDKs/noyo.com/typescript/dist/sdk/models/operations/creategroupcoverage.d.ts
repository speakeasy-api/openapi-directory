import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupCoverageRequest extends SpeakeasyBase {
    groupCoverageCreateRequest: shared.GroupCoverageCreateRequest;
    /**
     * The unique identifier of the application in Noyo
     */
    applicationId: string;
}
export declare class CreateGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Group Coverage
     */
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
