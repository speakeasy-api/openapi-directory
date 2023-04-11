import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmComponentsRequest extends SpeakeasyBase {
    name?: string;
    parent?: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    type?: string;
}
export declare class GetRealmComponentsResponse extends SpeakeasyBase {
    /**
     * success
     */
    componentRepresentations?: shared.ComponentRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
