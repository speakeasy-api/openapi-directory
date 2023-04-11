import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandQueryCreateUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * Constraints the query to a given Field with an task. Useful when you know the Field you are expecting. It accepts one field in the format *task-unique-name-1*:*field-unique-name*
     */
    field?: string;
    /**
     * An ISO language-country string of the sample.
     */
    language: string;
    /**
     * The Model Build Sid or unique name of the Model Build to be queried.
     */
    modelBuild?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long.
     */
    query: string;
    /**
     * Constraints the query to a set of tasks. Useful when you need to constrain the paths the user can take. Tasks should be comma separated *task-unique-name-1*, *task-unique-name-2*
     */
    tasks?: string;
}
export declare class CreateUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    requestBody?: CreateUnderstandQueryCreateUnderstandQueryRequest;
}
export declare class CreateUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantQuery?: shared.PreviewUnderstandAssistantQuery;
}
