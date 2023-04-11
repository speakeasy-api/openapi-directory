import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceIdentity } from "./serviceidentity";
/**
 * Response for GenerateServiceIdentity.
 */
export declare class GenerateServiceIdentityResponse extends SpeakeasyBase {
    /**
     * The per-product per-project service identity for Cloud TPU service.
     */
    identity?: ServiceIdentity;
}
