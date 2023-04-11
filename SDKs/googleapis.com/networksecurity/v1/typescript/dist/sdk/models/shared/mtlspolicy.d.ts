import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationCA } from "./validationca";
/**
 * Specification of the MTLSPolicy.
 */
export declare class MTLSPolicy extends SpeakeasyBase {
    /**
     *  Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate.
     */
    clientValidationCa?: ValidationCA[];
}
