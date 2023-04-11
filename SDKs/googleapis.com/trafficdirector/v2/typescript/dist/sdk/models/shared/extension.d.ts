import { SpeakeasyBase } from "../../../internal/utils";
import { BuildVersion } from "./buildversion";
/**
 * Version and identification for an Envoy extension. [#next-free-field: 6]
 */
export declare class Extension extends SpeakeasyBase {
    /**
     * Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment:
     */
    category?: string;
    /**
     * Indicates that the extension is present but was disabled via dynamic configuration.
     */
    disabled?: boolean;
    /**
     * This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget.
     */
    name?: string;
    /**
     * [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment:
     */
    typeDescriptor?: string;
    /**
     * BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
     */
    version?: BuildVersion;
}
