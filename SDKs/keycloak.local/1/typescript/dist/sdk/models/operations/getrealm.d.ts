import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    realmRepresentation?: shared.RealmRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
