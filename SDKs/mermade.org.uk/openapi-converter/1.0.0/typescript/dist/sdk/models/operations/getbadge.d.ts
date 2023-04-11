import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBadgeRequest extends SpeakeasyBase {
    /**
     * The URL to retrieve the OpenAPI 3.0.x definition from
     */
    url: string;
}
export declare class GetBadgeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
