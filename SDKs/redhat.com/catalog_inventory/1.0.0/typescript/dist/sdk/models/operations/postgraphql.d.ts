import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGraphQLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GraphQL Query Response
     */
    graphQLResponse?: shared.GraphQLResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
