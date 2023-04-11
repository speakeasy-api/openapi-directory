import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class StudioV2FlowTestUser extends SpeakeasyBase {
    /**
     * Unique identifier of the flow.
     */
    sid?: string;
    /**
     * List of test user identities that can test draft versions of the flow.
     */
    testUsers?: string[];
    /**
     * The URL of this resource.
     */
    url?: string;
}
