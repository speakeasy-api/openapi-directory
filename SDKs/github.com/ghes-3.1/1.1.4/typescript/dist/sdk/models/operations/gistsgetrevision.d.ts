import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsGetRevisionRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the gist.
     */
    gistId: string;
    sha: string;
}
export declare class GistsGetRevisionResponse extends SpeakeasyBase {
    contentType: string;
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
