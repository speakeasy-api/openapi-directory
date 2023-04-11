import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an artifact available via some URI.
 */
export declare class SoftwareRecipeArtifactRemote extends SpeakeasyBase {
    /**
     * Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps.
     */
    checksum?: string;
    /**
     * URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.
     */
    uri?: string;
}
