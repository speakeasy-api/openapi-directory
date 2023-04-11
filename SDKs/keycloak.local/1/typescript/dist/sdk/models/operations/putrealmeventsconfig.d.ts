import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRealmEventsConfigRequest extends SpeakeasyBase {
    realmEventsConfigRepresentation: shared.RealmEventsConfigRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PutRealmEventsConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
