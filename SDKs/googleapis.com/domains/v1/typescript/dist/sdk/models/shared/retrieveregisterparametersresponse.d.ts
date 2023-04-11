import { SpeakeasyBase } from "../../../internal/utils";
import { RegisterParameters } from "./registerparameters";
/**
 * Response for the `RetrieveRegisterParameters` method.
 */
export declare class RetrieveRegisterParametersResponse extends SpeakeasyBase {
    /**
     * Parameters required to register a new domain.
     */
    registerParameters?: RegisterParameters;
}
