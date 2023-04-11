import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmDefaultGroupsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmDefaultGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
