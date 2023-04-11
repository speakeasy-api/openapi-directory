import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResolveSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetResolveRequest extends SpeakeasyBase {
    /**
     * SoundCloud URL
     */
    url: string;
}
export declare class GetResolveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Found
     */
    found?: shared.Found;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
