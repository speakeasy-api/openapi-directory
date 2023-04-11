import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmGroupsIdChildrenRequest extends SpeakeasyBase {
    groupRepresentation: shared.GroupRepresentation;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmGroupsIdChildrenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
