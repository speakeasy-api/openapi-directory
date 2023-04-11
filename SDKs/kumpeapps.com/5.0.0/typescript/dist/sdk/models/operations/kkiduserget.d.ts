import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidUserGetRequest extends SpeakeasyBase {
    /**
     * Use bool values instead of Int 0/1
     */
    enableBool?: boolean;
}
export declare class KkidUserGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * search results matching criteria
     */
    userlist?: shared.Userlist;
}
