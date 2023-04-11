import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleLongrunningOperation } from "./googlelongrunningoperation";
/**
 * The response message for Operations.ListOperations.
 */
export declare class GoogleLongrunningListOperationsResponse extends SpeakeasyBase {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: GoogleLongrunningOperation[];
}
