import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a domain.
 */
export declare class Domain extends SpeakeasyBase {
    /**
     * An opaque string used to identify this domain.
     */
    legacyId?: string;
    /**
     * The name of the domain, e.g. `google.com`.
     */
    name?: string;
}
