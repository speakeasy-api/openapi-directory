import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmRequest extends SpeakeasyBase {
    realmRepresentation: shared.RealmRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
