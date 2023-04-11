import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1MediaIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1MediaIdRequest extends SpeakeasyBase {
    /**
     * The id of the Attachment entity to be updated.
     */
    id: string;
}
export declare class GetApiV1MediaIdResponse extends SpeakeasyBase {
    /**
     * Attachment created successfully. Note that the Attachment will be created even if the file is not understood correctly.
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
