import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupByPathPathRequest extends SpeakeasyBase {
    path: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupByPathPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentation?: shared.GroupRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
