import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppkeyPutSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class AppkeyPutRequest extends SpeakeasyBase {
    /**
     * app key to deactivate
     */
    appKey: string;
}
export declare class AppkeyPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * App key deactivated
     */
    inlineResponse202?: shared.InlineResponse202;
}
