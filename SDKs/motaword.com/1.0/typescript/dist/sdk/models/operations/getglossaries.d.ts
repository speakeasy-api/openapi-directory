import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGlossariesRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetGlossariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * A list of glossary models
     */
    glossaryList?: shared.GlossaryList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
