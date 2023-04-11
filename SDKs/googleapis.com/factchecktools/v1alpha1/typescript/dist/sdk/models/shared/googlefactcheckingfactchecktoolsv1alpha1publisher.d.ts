import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the publisher.
 */
export declare class GoogleFactcheckingFactchecktoolsV1alpha1Publisher extends SpeakeasyBase {
    /**
     * The name of this publisher. For instance, "Awesome Fact Checks".
     */
    name?: string;
    /**
     * Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL.
     */
    site?: string;
}
