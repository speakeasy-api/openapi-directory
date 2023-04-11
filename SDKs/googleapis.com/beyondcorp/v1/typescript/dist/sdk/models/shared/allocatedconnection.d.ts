import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allocated connection of the AppGateway.
 */
export declare class AllocatedConnection extends SpeakeasyBase {
    /**
     * Required. The ingress port of an allocated connection
     */
    ingressPort?: number;
    /**
     * Required. The PSC uri of an allocated connection
     */
    pscUri?: string;
}
