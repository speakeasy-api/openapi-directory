import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
