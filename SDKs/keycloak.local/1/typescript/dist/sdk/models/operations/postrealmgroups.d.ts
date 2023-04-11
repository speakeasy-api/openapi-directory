import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmGroupsRequest extends SpeakeasyBase {
    groupRepresentation: shared.GroupRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
