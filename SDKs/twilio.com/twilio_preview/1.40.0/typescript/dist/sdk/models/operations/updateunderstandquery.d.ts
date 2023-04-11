import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandQueryUpdateUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * An optional reference to the Sample created from this query.
     */
    sampleSid?: string;
    /**
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    status?: string;
}
export declare class UpdateUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    requestBody?: UpdateUnderstandQueryUpdateUnderstandQueryRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class UpdateUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
