import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSourceAccountV2Request extends SpeakeasyBase {
    /**
     * Source account id
     */
    sourceAccountId: string;
}
export declare class GetSourceAccountV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Source account response
     */
    sourceAccountResponseV2?: shared.SourceAccountResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
