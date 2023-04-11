import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
    personId: number;
}
export declare class GetUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The followed person
     */
    personFollow?: shared.PersonFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
