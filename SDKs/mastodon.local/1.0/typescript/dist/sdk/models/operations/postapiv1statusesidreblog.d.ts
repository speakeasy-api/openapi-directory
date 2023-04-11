import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1StatusesIdReblogSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1StatusesIdReblogRequestBody extends SpeakeasyBase {
    /**
     * any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI.
     */
    visibility?: string;
}
export declare class PostApiV1StatusesIdReblogRequest extends SpeakeasyBase {
    requestBody?: PostApiV1StatusesIdReblogRequestBody;
    /**
     * Local ID of a status in the database.
     */
    id: string;
}
export declare class PostApiV1StatusesIdReblogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Status has been reblogged. Note that the top-level id has changed. The id of the boosted status is now inside the reblog property. The top-level id is the id of the reblog itself. Also note that reblogs cannot be pinned.
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
