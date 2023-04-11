import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GraphQL Query Response
 */
export declare class GraphQLResponse extends SpeakeasyBase {
    /**
     * Results from the GraphQL query
     */
    data?: Record<string, any>;
    /**
     * Errors resulting from the GraphQL query
     */
    errors?: Record<string, any>[];
}
