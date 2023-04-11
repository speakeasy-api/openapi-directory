import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdIdentityProofsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdIdentityProofsRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1AccountsIdIdentityProofsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Account is deleted or does not exist
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    identityProofs?: shared.IdentityProof[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
