import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MembershipPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * newly created member entity
     */
    membershipPost200ApplicationJSONBoolean?: boolean;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
