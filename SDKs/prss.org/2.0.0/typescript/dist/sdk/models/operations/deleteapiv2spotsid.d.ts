import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2SpotsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2SpotsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeleteApiV2SpotsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to delete the spot.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
