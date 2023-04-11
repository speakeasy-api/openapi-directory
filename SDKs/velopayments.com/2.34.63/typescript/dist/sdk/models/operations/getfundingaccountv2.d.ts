import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFundingAccountV2Request extends SpeakeasyBase {
    fundingAccountId: string;
    sensitive?: boolean;
}
export declare class GetFundingAccountV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Funding Account Response
     */
    fundingAccountResponseV2?: shared.FundingAccountResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
