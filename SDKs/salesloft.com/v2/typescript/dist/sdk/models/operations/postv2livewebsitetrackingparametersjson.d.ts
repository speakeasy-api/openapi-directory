import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2LiveWebsiteTrackingParametersJsonRequestBody extends SpeakeasyBase {
    /**
     * The person to create the LiveWebsiteTrackingParameter for
     */
    personId: number;
}
export declare class PostV2LiveWebsiteTrackingParametersJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
