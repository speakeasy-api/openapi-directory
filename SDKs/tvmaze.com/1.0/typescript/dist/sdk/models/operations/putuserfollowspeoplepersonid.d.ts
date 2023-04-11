import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
    personId: number;
}
export declare class PutUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * this person is now followed
     */
    personFollow?: shared.PersonFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
