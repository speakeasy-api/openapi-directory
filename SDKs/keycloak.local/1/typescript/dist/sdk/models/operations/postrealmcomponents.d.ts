import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmComponentsRequest extends SpeakeasyBase {
    componentRepresentation: shared.ComponentRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmComponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
