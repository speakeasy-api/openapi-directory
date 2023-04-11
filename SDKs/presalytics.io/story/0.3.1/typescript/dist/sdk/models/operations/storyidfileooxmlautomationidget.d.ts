import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdFileOoxmlautomationidGetRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * the id of the ooxml_automation object
     */
    ooxmlAutomationId: string;
}
export declare class StoryIdFileOoxmlautomationidGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The latest versiono of the story, in its orginal file format
     */
    excelSpreadsheet?: Uint8Array;
    /**
     * The latest versiono of the story, in its orginal file format
     */
    powerpointPresentation?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The latest versiono of the story, in its orginal file format
     */
    wordDocument?: Uint8Array;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
