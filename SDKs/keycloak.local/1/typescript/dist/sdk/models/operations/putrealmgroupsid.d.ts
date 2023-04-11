import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmGroupsIdRequest extends SpeakeasyBase {
    groupRepresentation: shared.GroupRepresentation;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
