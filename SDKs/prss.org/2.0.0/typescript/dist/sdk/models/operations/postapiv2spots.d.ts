import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2SpotsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2SpotsRequestBody extends SpeakeasyBase {
    /**
     * The URI to the spot content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'.
     */
    cdDriveUri: string;
    /**
     * The name of the spot to create/update.
     */
    name: string;
    /**
     * Notes pertaining to the spot.
     */
    notes: string;
}
export declare class PostApiV2SpotsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    /**
     * The created spot with fields populated.
     */
    spot?: shared.Spot;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
