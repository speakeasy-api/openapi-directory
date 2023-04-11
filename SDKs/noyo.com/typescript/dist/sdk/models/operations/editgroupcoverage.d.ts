import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditGroupCoverageRequest extends SpeakeasyBase {
    groupCoverageEditRequest: shared.GroupCoverageEditRequest;
    /**
     * The unique identifier of the group coverage in Noyo
     */
    groupCoverageId: string;
    /**
     * The current version identifier of the group coverage
     */
    version: string;
}
export declare class EditGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Group Coverage
     */
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
