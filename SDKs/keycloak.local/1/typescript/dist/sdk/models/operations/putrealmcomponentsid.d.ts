import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmComponentsIdRequest extends SpeakeasyBase {
    componentRepresentation: shared.ComponentRepresentation;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmComponentsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
