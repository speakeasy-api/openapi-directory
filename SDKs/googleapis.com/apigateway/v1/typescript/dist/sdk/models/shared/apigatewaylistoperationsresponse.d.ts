import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayOperation } from "./apigatewayoperation";
/**
 * The response message for Operations.ListOperations.
 */
export declare class ApigatewayListOperationsResponse extends SpeakeasyBase {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: ApigatewayOperation[];
}
