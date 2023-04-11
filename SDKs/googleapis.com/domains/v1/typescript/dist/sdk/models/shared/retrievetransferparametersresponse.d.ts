import { SpeakeasyBase } from "../../../internal/utils";
import { TransferParameters } from "./transferparameters";
/**
 * Response for the `RetrieveTransferParameters` method.
 */
export declare class RetrieveTransferParametersResponse extends SpeakeasyBase {
    /**
     * Parameters required to transfer a domain from another registrar.
     */
    transferParameters?: TransferParameters;
}
