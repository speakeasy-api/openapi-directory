import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmTestSMTPConnectionRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmTestSMTPConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
