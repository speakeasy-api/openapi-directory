import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
    personId: number;
}
export declare class DeleteUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
