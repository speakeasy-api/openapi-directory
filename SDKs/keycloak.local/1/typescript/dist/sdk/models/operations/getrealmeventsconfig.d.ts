import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmEventsConfigRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmEventsConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    realmEventsConfigRepresentation?: shared.RealmEventsConfigRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
