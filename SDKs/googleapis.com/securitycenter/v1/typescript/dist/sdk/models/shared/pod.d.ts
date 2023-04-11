import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Label } from "./label";
/**
 * Kubernetes Pod.
 */
export declare class Pod extends SpeakeasyBase {
    /**
     * Pod containers associated with this finding, if any.
     */
    containers?: Container[];
    /**
     * Pod labels. For Kubernetes containers, these are applied to the container.
     */
    labels?: Label[];
    /**
     * Kubernetes Pod name.
     */
    name?: string;
    /**
     * Kubernetes Pod namespace.
     */
    ns?: string;
}
