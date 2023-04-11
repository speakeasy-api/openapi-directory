import { SpeakeasyBase } from "../../../internal/utils";
import { TypeMeta } from "./typemeta";
/**
 * ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.
 */
export declare class ConnectAgentResource extends SpeakeasyBase {
    /**
     * YAML manifest of the resource.
     */
    manifest?: string;
    /**
     * TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.
     */
    type?: TypeMeta;
}
