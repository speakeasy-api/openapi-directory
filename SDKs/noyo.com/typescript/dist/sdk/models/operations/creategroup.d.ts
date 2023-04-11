import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Group
     */
    groupResult?: shared.GroupResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
