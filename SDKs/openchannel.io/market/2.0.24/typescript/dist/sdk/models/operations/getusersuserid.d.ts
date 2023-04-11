import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUsersUserIdRequest extends SpeakeasyBase {
    /**
     * The id of the user to be located
     */
    userId: string;
}
export declare class GetUsersUserIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
