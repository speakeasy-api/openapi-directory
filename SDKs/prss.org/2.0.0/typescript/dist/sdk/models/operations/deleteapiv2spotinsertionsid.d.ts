import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2SpotinsertionsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2SpotinsertionsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeleteApiV2SpotinsertionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to delete the spot insertion.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
