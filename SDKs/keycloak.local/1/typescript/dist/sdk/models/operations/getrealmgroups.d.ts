import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsRequest extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    search?: string;
}
export declare class GetRealmGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
