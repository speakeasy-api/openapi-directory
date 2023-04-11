import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createGroupResponse?: shared.CreateGroupResponse;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
