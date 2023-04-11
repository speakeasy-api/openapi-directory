import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReactionsDeleteLegacyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the reaction.
     */
    reactionId: number;
}
export declare class ReactionsDeleteLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
