import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Provide analysis domain for better extraction (optional)
 */
export declare enum TopicSentimentDomainEnum {
    Ecom = "Ecom",
    Employee = "Employee",
    Hotel = "Hotel",
    Restaurant = "Restaurant"
}
export declare class TopicSentimentRequest extends SpeakeasyBase {
    requestBody?: shared.Post[];
    /**
     * Provide analysis domain for better extraction (optional)
     */
    domain?: TopicSentimentDomainEnum;
}
export declare class TopicSentimentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    topicSentimentResponse?: shared.TopicSentimentOutput[];
}
