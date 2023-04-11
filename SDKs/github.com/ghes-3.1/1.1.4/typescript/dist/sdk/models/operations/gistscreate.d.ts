import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsCreateRequestBodyFiles extends SpeakeasyBase {
    /**
     * Content of the file
     */
    content: string;
}
export declare enum GistsCreateRequestBodyPublic2Enum {
    True = "true",
    False = "false"
}
export declare class GistsCreateRequestBody extends SpeakeasyBase {
    /**
     * Description of the gist
     */
    description?: string;
    /**
     * Names and content for the files that make up the gist
     */
    files: Record<string, GistsCreateRequestBodyFiles>;
    public?: any;
}
export declare class GistsCreateResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gistSimple?: shared.GistSimple;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
