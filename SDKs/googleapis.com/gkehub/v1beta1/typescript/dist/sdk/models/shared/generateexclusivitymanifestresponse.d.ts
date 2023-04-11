import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response of the exclusivity artifacts manifests for the client to apply.
 */
export declare class GenerateExclusivityManifestResponse extends SpeakeasyBase {
    /**
     * The YAML manifest of the membership CR to apply if a new version of the CR is available. Empty if no update needs to be applied.
     */
    crManifest?: string;
    /**
     * The YAML manifest of the membership CRD to apply if a newer version of the CRD is available. Empty if no update needs to be applied.
     */
    crdManifest?: string;
}
