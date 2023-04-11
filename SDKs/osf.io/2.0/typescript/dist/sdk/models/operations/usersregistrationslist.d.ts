import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersRegistrationsListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
export declare class UsersRegistrationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
