import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmUsersRequest extends SpeakeasyBase {
    userRepresentation: shared.UserRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
