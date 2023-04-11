import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetRepoPublicKeyRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetRepoPublicKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsPublicKey?: shared.ActionsPublicKey;
}
