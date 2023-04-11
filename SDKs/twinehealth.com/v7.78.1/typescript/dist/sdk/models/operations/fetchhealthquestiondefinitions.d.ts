import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchHealthQuestionDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthQuestionDefinitionsResponse?: shared.FetchHealthQuestionDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
