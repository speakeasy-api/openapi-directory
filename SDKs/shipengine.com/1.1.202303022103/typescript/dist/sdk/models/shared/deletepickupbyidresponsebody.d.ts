import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * A delete scheduled pickup response body
 */
export declare class DeletePickupByIdResponseBody extends SpeakeasyBase {
    /**
     * The errors associated with the failed API call
     */
    errors: ErrorT[];
    pickupId: string;
    /**
     * A UUID that uniquely identifies the request id.
     *
     * @remarks
     * This can be given to the support team to help debug non-trivial issues that may occur
     *
     */
    requestId: string;
}
