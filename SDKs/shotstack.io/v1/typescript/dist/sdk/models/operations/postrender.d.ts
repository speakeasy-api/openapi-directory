import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRenderSecurity extends SpeakeasyBase {
    developerKey: string;
}
export declare class PostRenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The queued render details
     */
    queuedResponse?: shared.QueuedResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
