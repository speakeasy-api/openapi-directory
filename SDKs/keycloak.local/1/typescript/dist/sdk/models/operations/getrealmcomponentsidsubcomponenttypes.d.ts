import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmComponentsIdSubComponentTypesRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    type?: string;
}
export declare class GetRealmComponentsIdSubComponentTypesResponse extends SpeakeasyBase {
    /**
     * success
     */
    componentTypeRepresentations?: shared.ComponentTypeRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
