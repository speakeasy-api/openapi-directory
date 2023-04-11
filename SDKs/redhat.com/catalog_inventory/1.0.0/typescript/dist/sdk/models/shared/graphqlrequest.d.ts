import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GraphQL Query Request
 */
export declare class GraphQLRequest extends SpeakeasyBase {
    /**
     * If the Query contains several named operations, the operationName controls which one should be executed
     */
    operationName?: string;
    /**
     * The GraphQL query
     */
    query: string;
    /**
     * Optional Query variables
     */
    variables?: Record<string, any>;
}
