import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsIdRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentation?: shared.GroupRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
