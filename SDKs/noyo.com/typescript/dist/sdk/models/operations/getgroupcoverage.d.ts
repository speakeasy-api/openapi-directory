import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGroupCoverageRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the group coverage in Noyo
     */
    groupCoverageId: string;
}
export declare class GetGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Group Coverage
     */
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
