import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUsersUserIdRequest extends SpeakeasyBase {
    /**
     * The id of the user to be removed
     */
    userId: string;
}
export declare class DeleteUsersUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
