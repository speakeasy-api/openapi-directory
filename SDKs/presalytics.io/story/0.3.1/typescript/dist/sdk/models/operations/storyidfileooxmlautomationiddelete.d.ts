import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StoryIdFileOoxmlautomationidDeleteRequest extends SpeakeasyBase {
    /**
     * the id from the story object
     */
    id: string;
    /**
     * the id of the ooxml_automation object
     */
    ooxmlAutomationId: string;
}
export declare class StoryIdFileOoxmlautomationidDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
