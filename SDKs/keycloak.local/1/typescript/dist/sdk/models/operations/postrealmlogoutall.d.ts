import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmLogoutAllRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmLogoutAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
