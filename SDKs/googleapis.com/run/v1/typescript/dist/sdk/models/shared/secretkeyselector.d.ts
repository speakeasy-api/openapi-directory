import { SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";
/**
 * SecretKeySelector selects a key of a Secret.
 */
export declare class SecretKeySelector extends SpeakeasyBase {
    /**
     * Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key.
     */
    key?: string;
    /**
     * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
     */
    localObjectReference?: LocalObjectReference;
    /**
     * The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from.
     */
    name?: string;
    /**
     * Specify whether the Secret or its key must be defined.
     */
    optional?: boolean;
}
