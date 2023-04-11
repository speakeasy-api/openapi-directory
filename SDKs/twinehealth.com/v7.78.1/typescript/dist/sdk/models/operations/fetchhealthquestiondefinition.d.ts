import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchHealthQuestionDefinitionRequest extends SpeakeasyBase {
    /**
     * Health question definition identifier
     */
    id: string;
}
export declare class FetchHealthQuestionDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthQuestionDefinitionResponse?: shared.FetchHealthQuestionDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
