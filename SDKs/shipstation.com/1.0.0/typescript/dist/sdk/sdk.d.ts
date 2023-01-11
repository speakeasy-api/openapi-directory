import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://polls.apiblueprint.org"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * createANewQuestion - Create a New Question
     *
     * You may create your own question using this action. It takes a JSON
     * object containing a question and a collection of answers in the
     * form of choices.
    **/
    createANewQuestion(req: operations.CreateANewQuestionRequest, config?: AxiosRequestConfig): Promise<operations.CreateANewQuestionResponse>;
    /**
     * listAllQuestions - List All Questions
    **/
    listAllQuestions(config?: AxiosRequestConfig): Promise<operations.ListAllQuestionsResponse>;
}
