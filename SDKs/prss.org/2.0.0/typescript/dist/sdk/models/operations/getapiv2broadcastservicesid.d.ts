import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2BroadcastservicesIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2BroadcastservicesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the broadcast service to find.
     */
    id: number;
}
export declare class GetApiV2BroadcastservicesIdResponse extends SpeakeasyBase {
    /**
     * The matching broadcast service.
     */
    broadcastService?: shared.BroadcastService;
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view this broadcast service.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
