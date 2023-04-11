import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmComponentsIdRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmComponentsIdResponse extends SpeakeasyBase {
    /**
     * success
     */
    componentRepresentation?: shared.ComponentRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
