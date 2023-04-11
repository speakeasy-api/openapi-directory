import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryOutlineSchemaRequest extends SpeakeasyBase {
    /**
     * The semanitic version of a schema (e.g. '0.3.1')
     */
    schemaVersion: string;
}
export declare class StoryOutlineSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
