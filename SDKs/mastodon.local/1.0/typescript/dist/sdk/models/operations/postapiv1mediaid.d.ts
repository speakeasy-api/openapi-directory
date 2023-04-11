import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1MediaIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1MediaIdRequestBody extends SpeakeasyBase {
    /**
     * A plain-text description of the media, for accessibility purposes.
     */
    description?: string;
    /**
     * The file to be attached, using multipart form data.
     */
    file: Uint8Array;
    /**
     * Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below)
     */
    focus?: string;
    /**
     * The custom thumbnail of the media to be attached, using multipart form data.
     */
    thumbnail?: Uint8Array;
}
export declare class PostApiV1MediaIdRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * The id of the Attachment entity to be updated.
     */
    id: string;
}
export declare class PostApiV1MediaIdResponse extends SpeakeasyBase {
    /**
     * Attachment updated successfully.
     */
    attachment?: shared.Attachment;
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
