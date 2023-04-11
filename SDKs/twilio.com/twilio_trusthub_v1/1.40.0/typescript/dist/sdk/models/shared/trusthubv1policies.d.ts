import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TrusthubV1Policies extends SpeakeasyBase {
    /**
     * A human-readable description that is assigned to describe the Policy resource. Examples can include Primary Customer profile policy
     */
    friendlyName?: string;
    /**
     * The SID of an object that holds the policy information
     */
    requirements?: any;
    /**
     * The unique string that identifies the Policy resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Policy resource.
     */
    url?: string;
}
