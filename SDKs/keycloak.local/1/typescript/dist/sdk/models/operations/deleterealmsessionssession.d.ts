import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmSessionsSessionRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    session: string;
}
export declare class DeleteRealmSessionsSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
