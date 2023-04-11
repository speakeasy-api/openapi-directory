import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Deprecated] Custom authenticator credentials. Custom authenticator credentials.
 */
export declare class MetadataCredentialsFromPlugin extends SpeakeasyBase {
    /**
     * Plugin name.
     */
    name?: string;
    /**
     * A text proto that conforms to a Struct type definition interpreted by the plugin.
     */
    structConfig?: string;
}
